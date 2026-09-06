// Helper functions for HTML5 History API Routing without '#'

export function getBasePath() {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return cleanBase;
}

export function getRoutePath() {
  let pathname = window.location.pathname;
  const basePath = getBasePath();

  // If legacy hash route is present (e.g. #/about), auto-migrate to clean path
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    const cleanHash = window.location.hash.replace('#', '');
    const targetUrl = (basePath + cleanHash).replace(/\/+/g, '/');
    window.history.replaceState(null, '', targetUrl);
    pathname = window.location.pathname;
  }

  // Strip duplicate/repeated base path prefix if present (e.g. /digitech-elevators/digitech-elevators/...)
  if (basePath && pathname.startsWith(basePath)) {
    let hadDuplicates = false;
    while (pathname.startsWith(basePath)) {
      pathname = pathname.substring(basePath.length);
      if (pathname.startsWith(basePath)) {
        hadDuplicates = true;
      }
    }
    // If URL had repeated base paths, clean up browser address bar history
    if (hadDuplicates) {
      const cleanUrl = (basePath + (pathname.startsWith('/') ? pathname : '/' + pathname)).replace(/\/+/g, '/');
      window.history.replaceState(null, '', cleanUrl + window.location.search + window.location.hash);
    }
  }

  // Trim trailing slash if present (except root '/')
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // Normalize root path to /home
  if (!pathname || pathname === '' || pathname === '/' || pathname === '/home') {
    return '/home';
  }
  return pathname;
}

export function navigate(path, replace = false) {
  const basePath = getBasePath();
  let cleanPath = path.trim();

  // Strip any legacy hash prefix
  if (cleanPath.startsWith('#/')) {
    cleanPath = cleanPath.slice(1);
  }

  // Strip repeated base path prefix if present in target
  if (basePath) {
    while (cleanPath.startsWith(basePath)) {
      cleanPath = cleanPath.substring(basePath.length);
    }
  }

  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  const targetUrl = (basePath + cleanPath).replace(/\/+/g, '/');

  if (window.location.pathname !== targetUrl) {
    if (replace) {
      window.history.replaceState(null, '', targetUrl);
    } else {
      window.history.pushState(null, '', targetUrl);
    }
    window.dispatchEvent(new Event('popstate'));
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

export function getLink(path) {
  const basePath = getBasePath();
  let cleanPath = (path || '').trim();

  if (cleanPath.startsWith('#/')) {
    cleanPath = cleanPath.slice(1);
  }

  if (basePath) {
    while (cleanPath.startsWith(basePath)) {
      cleanPath = cleanPath.substring(basePath.length);
    }
  }

  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  return (basePath + cleanPath).replace(/\/+/g, '/');
}

export function getAssetUrl(path) {
  if (!path || typeof path !== 'string') return path || '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  const basePath = getBasePath();
  let cleanPath = path.trim();
  if (cleanPath.startsWith('./')) {
    cleanPath = cleanPath.slice(2);
  }
  if (basePath && (cleanPath.startsWith(basePath) || cleanPath.startsWith(basePath + '/'))) {
    return cleanPath.replace(/\/+/g, '/');
  }
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  return (basePath + cleanPath).replace(/\/+/g, '/');
}


