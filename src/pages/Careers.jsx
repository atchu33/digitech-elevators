import React, { useState } from 'react';

// NOTE: Get your free access key from https://web3forms.com/ and replace this placeholder.
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function Careers() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [validationError, setValidationError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setValidationError('');
    const file = e.target.files[0];
    if (!file) return;

    // Check file extension
    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    const fileName = file.name.toLowerCase();
    const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));

    if (!hasValidExtension) {
      setValidationError('Please upload a file in PDF, DOC, or DOCX format only.');
      setResumeFile(null);
      e.target.value = ''; // Reset file input
      return;
    }

    // Check file size (5MB limit)
    const maxSizeInBytes = 5 * 1024 * 1024;
    if (file.size > maxSizeInBytes) {
      setValidationError('File is too large. Maximum file size is 5MB.');
      setResumeFile(null);
      e.target.value = ''; // Reset file input
      return;
    }

    setResumeFile(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setValidationError('Please upload your resume.');
      return;
    }
    
    setIsSubmitting(true);
    setValidationError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);
      formDataToSend.append("subject", `New Job Application: ${formData.name}`);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("attachment", resumeFile);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
      } else {
        setValidationError(data.message || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      setValidationError("An error occurred. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      {/* ── Hero Banner ── */}
      <section className="relative bg-brand-navy text-white py-24 px-4 text-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
        >
          <source src="lift2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay & radial gradient overlay for premium lighting */}
        <div className="absolute inset-0 bg-brand-navy/80 z-[1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.25)_0%,_transparent_70%)] z-[2]"></div>
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest animate-pulse-ring">
            Join Our Team
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold animate-gold-shimmer">
            Careers at Digitech Elevators
          </h2>
          <p className="text-slate-350 text-sm max-w-xl mx-auto leading-relaxed">
            Interested in building a career with us? Submit your details below and our team will get in touch.
          </p>
        </div>
      </section>

      {/* ── Application Form Section ── */}
      <section className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white py-16 px-4 md:px-8 border-t-4 border-brand-gold relative overflow-hidden flex justify-center">
        {/* Faint animated background lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[25, 50, 75].map(pos => (
            <div 
              key={pos} 
              className="absolute top-0 bottom-0 w-px bg-brand-gold" 
              style={{ left: `${pos}%`, animation: 'shaftGlow 2.5s infinite' }} 
            />
          ))}
        </div>

        <div className="max-w-3xl w-full bg-white rounded-2xl p-8 md:p-10 text-slate-800 shadow-2xl relative z-10">
          <h4 className="font-serif font-bold text-2xl text-brand-navy border-b border-slate-200 pb-3 mb-6 flex items-center gap-2">
            <i className="fa-solid fa-file-invoice text-brand-gold animate-float"></i> Apply Online
          </h4>

          {formSubmitted ? (
            <div className="text-center py-16 animate-zoom-in">
              <i className="fa-solid fa-circle-check text-6xl text-green-500 mb-5 animate-bounce block"></i>
              <h4 className="font-serif font-bold text-2xl mb-2 text-brand-navy">Application Received!</h4>
              <p className="text-sm text-slate-500">Thank you! Your application has been received.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {validationError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-simple">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <span>{validationError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy/20 transition-all duration-200" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy/20 transition-all duration-200" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email Address"
                    className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy/20 transition-all duration-200" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Upload Resume (PDF, DOC, DOCX) *</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-305 border-dashed rounded-lg hover:border-brand-navy transition duration-200">
                  <div className="space-y-1 text-center">
                    <i className="fa-solid fa-cloud-arrow-up text-3xl text-slate-400 mb-2 block"></i>
                    <div className="flex text-xs text-slate-650 justify-center">
                      <label className="relative cursor-pointer bg-white rounded-md font-semibold text-brand-gold hover:text-brand-gold-hover focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-navy">
                        <span>Upload a file</span>
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          className="sr-only" 
                          onChange={handleFileChange}
                          required
                        />
                      </label>
                      <p className="pl-1 text-slate-500">or drag and drop</p>
                    </div>
                    <p className="text-[10px] text-slate-500">PDF, DOC, DOCX up to 5MB</p>
                    {resumeFile && (
                      <div className="mt-2 text-xs text-slate-800 font-semibold bg-slate-100 px-3 py-1 rounded inline-flex items-center gap-1.5">
                        <i className="fa-solid fa-file-lines text-brand-navy"></i>
                        <span>{resumeFile.name}</span>
                        <button 
                          type="button" 
                          className="text-red-500 hover:text-red-700 font-bold ml-1"
                          onClick={() => {
                            setResumeFile(null);
                            setValidationError('');
                          }}
                        >
                          &times;
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Cover Note / Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4" 
                  placeholder="Tell us about yourself and why you'd like to join Digitech Elevators..."
                  className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy/20 transition-all duration-200 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all hover:scale-[1.01] shadow-lg hover:shadow-xl btn-glow flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner animate-spin"></i> Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
