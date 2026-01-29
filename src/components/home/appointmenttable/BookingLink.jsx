import React, { useState } from 'react';

const BookingLink = () => {
  const [copied, setCopied] = useState(false);
  const bookingLink = 'https://techstore.com/book?id=store123';

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4">
      <div className="bg-slate-900 rounded-lg border border-slate-700 p-6">
        <h3 className="text-slate-300 text-sm font-medium mb-3">Booking Link</h3>
        <div className="flex items-center gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
          <input
            type="text"
            value={bookingLink}
            readOnly
            className="flex-1 bg-transparent text-slate-300 text-sm outline-none"
          />
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingLink;