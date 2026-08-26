import React, { useState, useEffect } from 'react';

/**
 * VisitorCounter Component
 * 
 * Tracks and displays total website visits:
 * - On deployed production site: Real visits increment the global count once per session.
 * - On local development (localhost): Only reads the current count without incrementing, preventing test visits from inflating real stats.
 * - Session deduplication: Prevents page refreshes from incrementing.
 * - Gracefully falls back to local cache if offline or if API is unreachable.
 */
export default function VisitorCounter({ className = '' }) {
  const BASE_COUNT = 0;
  const NAMESPACE = 'digitech-elevators-live';
  const KEY = 'visitor-count';
  const SESSION_KEY = 'digitech_visitor_session_v2';
  const CACHE_KEY = 'digitech_visitor_count_cache_v2';

  const [count, setCount] = useState(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      return cached ? parseInt(cached, 10) : 0;
    } catch {
      return 0;
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function trackVisitor() {
      try {
        // Detect if running locally (localhost/127.0.0.1) vs on deployed production site
        const isLocalhost = 
          typeof window !== 'undefined' && 
          (window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1' || 
           window.location.hostname.startsWith('192.168.'));

        let hasCountedInSession = false;
        try {
          hasCountedInSession = sessionStorage.getItem(SESSION_KEY) === 'true';
        } catch {
          // In case sessionStorage is blocked
        }

        // On localhost or repeated session visit: only GET the count (never increment).
        // On deployed production site: HIT to increment only once per new visitor session.
        let endpoint = (isLocalhost || hasCountedInSession)
          ? `https://abacus.jasoncameron.dev/get/${NAMESPACE}/${KEY}`
          : `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`;

        let response = await fetch(endpoint, {
          method: 'GET',
          headers: { 'Accept': 'application/json' },
        });

        // If 'get' returned 404 (key not initialized yet), initialize with 'hit'
        if (!response.ok && (isLocalhost || hasCountedInSession)) {
          endpoint = `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`;
          response = await fetch(endpoint, {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
          });
        }

        if (!response.ok) {
          throw new Error(`Counter API returned status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data && typeof data.value === 'number') {
          const totalCount = BASE_COUNT + data.value;

          if (isMounted) {
            setCount(totalCount);
            setLoading(false);
          }

          // Mark session as tracked on production and update local cache
          try {
            if (!isLocalhost) {
              sessionStorage.setItem(SESSION_KEY, 'true');
            }
            localStorage.setItem(CACHE_KEY, totalCount.toString());
          } catch {
            // Storage quota or privacy mode error handling
          }
        }
      } catch (_err) {
        // Gracefully handle failure: maintain cached/fallback count
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    trackVisitor();

    return () => {
      isMounted = false;
    };
  }, []);

  const formattedCount = count > 0 ? count.toLocaleString() : '1';

  return (
    <div 
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs font-sans shadow-sm hover:border-brand-blue/60 transition-all ${className}`}
      title="Total Website Visits"
      aria-label={`Total Website Visitors: ${formattedCount}`}
    >
      <span className="flex items-center justify-center text-brand-blue-bright">
        <i className="fa-solid fa-eye text-xs"></i>
      </span>
      
      <span className="text-slate-400 font-medium tracking-tight">Visitors:</span>

      <span className="font-bold text-white font-mono tracking-wide">
        {loading && count === 0 ? (
          <span className="opacity-70 animate-pulse">...</span>
        ) : (
          formattedCount
        )}
      </span>
    </div>
  );
}
