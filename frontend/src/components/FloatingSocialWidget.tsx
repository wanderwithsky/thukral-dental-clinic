import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';

interface SocialChannel {
  id: string;
  name: string;
  label: string;
  url: string;
  ariaLabel: string;
  bgClass?: string;
  style?: React.CSSProperties;
  icon: React.ReactNode;
  delayMs: number;
}

// 1. Facebook: Existing official URL from website footer/project
const FACEBOOK_URL = "https://www.facebook.com/www.tdocvns.vom/";

// 2. Instagram: Exact requested URL
const INSTAGRAM_URL = "https://www.instagram.com/thukraldentalclinic/";

// 3. Gmail: Exact compose window URL for Dr. Anchit Thukral
const GMAIL_COMPOSE_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=dranchitthukral@gmail.com";

// 4. LinkedIn: Exact requested profile URL
const LINKEDIN_URL = "https://www.linkedin.com/in/anchit-thukral-09679717/";

// 5. WhatsApp: Official clinic WhatsApp link
const WHATSAPP_URL = "https://wa.me/918299719955";

export const FloatingSocialWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menu on outside click (for mobile/tablet touch users)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Desktop hover handlers with smooth micro-debounce to prevent accidental close between icons
  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      closeTimerRef.current = null;
    }, 150);
  };

  // Toggle for click / touch on arrow button
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // Close menu when any social link is clicked
  const handleChannelClick = () => {
    setIsOpen(false);
  };

  // 4 Expandable items placed directly above WhatsApp in exact order:
  // 1. Facebook (top)
  // 2. Instagram
  // 3. Gmail
  // 4. LinkedIn
  const upperChannels: SocialChannel[] = [
    {
      id: 'facebook',
      name: 'Facebook',
      label: 'Facebook',
      url: FACEBOOK_URL,
      ariaLabel: 'Follow Thukral Dental Clinic on Facebook (opens in new tab)',
      bgClass: 'bg-[#1877F2] text-white hover:bg-[#166fe5]',
      delayMs: 120,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      label: 'Instagram',
      url: INSTAGRAM_URL,
      ariaLabel: 'Visit Thukral Dental Clinic on Instagram (opens in new tab)',
      style: {
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
      },
      delayMs: 80,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      id: 'gmail',
      name: 'Gmail',
      label: 'Email Us',
      url: GMAIL_COMPOSE_URL,
      ariaLabel: 'Send an email to Dr. Anchit Thukral via Gmail (opens compose window in new tab)',
      bgClass: 'bg-white text-zinc-800 border border-zinc-200/90 shadow-md hover:bg-zinc-50',
      delayMs: 40,
      icon: (
        <svg viewBox="0 0 48 48" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
          <path fill="#4285F4" d="M45,16.2l-5,2.75v19.05c0,1.1-0.9,2-2,2h-7V25.2l14-7.7V16.2z"/>
          <path fill="#34A853" d="M3,16.2l14,7.7v14.1H5c-1.1,0-2-0.9-2-2V18.95L3,16.2z"/>
          <path fill="#EA4335" d="M38,13l-14,7.7L10,13v-3.5c0-1.47,1.59-2.39,2.87-1.68L24,13.8l11.13-5.98C36.41,7.11,38,8.03,38,9.5V13z"/>
          <path fill="#FBBC04" d="M10,13l14,7.7V40H17V23.9L10,13z"/>
          <path fill="#C5221F" d="M24,20.7L38,13v27h-7V23.9L24,20.7z"/>
        </svg>
      ),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      label: 'LinkedIn',
      url: LINKEDIN_URL,
      ariaLabel: 'View Dr. Anchit Thukral on LinkedIn (opens in new tab)',
      bgClass: 'bg-[#0A66C2] text-white hover:bg-[#095196]',
      delayMs: 0,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <aside
      ref={widgetRef}
      aria-label="Connect with Thukral Dental Clinic via Social Media and Messaging"
      className="fixed bottom-6 right-6 z-40 print:hidden select-none flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 
        EXPANDABLE TOP CHANNELS (Facebook, Instagram, Gmail, LinkedIn)
        Expanding vertically upward with staggered transitions
      */}
      <div
        className={`flex flex-col items-center gap-2.5 sm:gap-3 transition-all duration-300 ease-out origin-bottom ${
          isOpen
            ? 'opacity-100 max-h-[300px] mb-2.5 sm:mb-3 pointer-events-auto'
            : 'opacity-0 max-h-0 mb-0 pointer-events-none overflow-hidden scale-90'
        }`}
      >
        {upperChannels.map((channel) => (
          <div key={channel.id} className="relative group/btn flex items-center justify-center">
            {/* Smooth Left-Aligned Hover Tooltip */}
            <span
              role="tooltip"
              className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-zinc-900/95 text-white text-xs font-medium tracking-wide shadow-xl backdrop-blur-sm border border-white/10 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 -translate-x-1 group-hover/btn:translate-x-0 transition-all duration-200 pointer-events-none z-50"
            >
              {channel.label}
              <span className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-zinc-900/95" />
            </span>

            {/* Circular Social Channel Link */}
            <a
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={channel.ariaLabel}
              onClick={handleChannelClick}
              style={{
                ...channel.style,
                transitionDelay: isOpen ? `${channel.delayMs}ms` : '0ms',
              }}
              className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-primary/30 cursor-pointer ${
                channel.bgClass || ''
              }`}
            >
              {channel.icon}
            </a>
          </div>
        ))}
      </div>

      {/* 
        CONTROL ARROW / CHEVRON BUTTON
        Positioned immediately ABOVE the WhatsApp button in collapsed state.
        Rotates 180° when expanded to indicate downward collapse.
      */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Collapse social media options" : "More social media channels"}
        className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 text-text border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer mb-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40 group/arrow"
        title={isOpen ? "Collapse options" : "Show social options"}
      >
        <ChevronUp
          size={16}
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary group-hover/arrow:text-white' : 'rotate-0 text-text-muted group-hover/arrow:text-white'
          }`}
        />
      </button>

      {/* 
        5. WHATSAPP BUTTON (The base item, bottom of the menu)
        Preserves original green background, shadow, white logo and exact placement.
      */}
      <div className="relative group/btn flex items-center justify-center">
        {/* WhatsApp Left Tooltip */}
        <span
          role="tooltip"
          className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-zinc-900/95 text-white text-xs font-medium tracking-wide shadow-xl backdrop-blur-sm border border-white/10 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 -translate-x-1 group-hover/btn:translate-x-0 transition-all duration-200 pointer-events-none z-50"
        >
          WhatsApp
          <span className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-zinc-900/95" />
        </span>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Thukral Dental Clinic on WhatsApp (opens in new tab)"
          onClick={handleChannelClick}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer overflow-hidden p-3 sm:p-3.5"
          style={{
            boxShadow: '0 8px 24px -4px rgba(37, 211, 102, 0.45), 0 4px 12px -2px rgba(0, 0, 0, 0.12)',
          }}
        >
          <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 shrink-0">
            <svg
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
              fill="currentColor"
              aria-hidden="true"
              className="transform transition-transform duration-300 group-hover:scale-105"
            >
              <path d="M12.031 2C6.516 2 2.023 6.49 2.023 12c0 1.99.585 3.847 1.6 5.414L2.007 22l4.734-1.57A9.94 9.94 0 0 0 12.031 22c5.516 0 10.01-4.49 10.01-10s-4.494-10-10.01-10zm0 18.234a8.21 8.21 0 0 1-4.328-1.226l-.31-.188-3.218 1.066 1.077-3.14-.203-.328A8.19 8.19 0 0 1 3.8 12c0-4.539 3.695-8.234 8.231-8.234 4.536 0 8.231 3.695 8.231 8.234 0 4.539-3.695 8.234-8.231 8.234zm4.512-6.176c-.246-.125-1.465-.723-1.691-.809-.23-.082-.395-.125-.562.125-.164.246-.641.809-.785.973-.145.164-.29.184-.535.063-.246-.125-1.04-.383-1.98-1.223-.73-.652-1.223-1.457-1.367-1.703-.145-.246-.016-.38.105-.504.11-.11.246-.29.371-.434.125-.145.164-.246.246-.41.082-.164.043-.31-.02-.434-.062-.125-.562-1.355-.77-1.855-.203-.49-.41-.422-.562-.43-.145-.008-.31-.008-.477-.008s-.434.063-.66.31c-.23.246-.875.855-.875 2.086 0 1.23.895 2.422 1.02 2.586.125.164 1.761 2.69 4.265 3.77.598.258 1.063.41 1.426.527.6.191 1.145.164 1.578.1.48-.074 1.465-.6 1.672-1.18.207-.582.207-1.082.145-1.184-.063-.105-.227-.168-.473-.293z" />
            </svg>
          </div>
        </a>
      </div>
    </aside>
  );
};

export default FloatingSocialWidget;

