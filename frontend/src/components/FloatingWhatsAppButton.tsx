import React, { useState } from 'react';

export const FloatingWhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // International format for India: 91 + 8299719955
  const phoneNumber = '918299719955';
  const rawMessage = 'Hello Thukral Dental & Aesthetic Clinic, I would like to book an appointment. Please share the available time slots.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(rawMessage)}`;

  return (
    <aside 
      aria-label="WhatsApp Appointment Booking"
      className="fixed bottom-6 right-6 z-40 print:hidden select-none"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Appointment via WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="group relative flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer overflow-hidden p-3 sm:p-3.5"
        style={{
          boxShadow: '0 8px 24px -4px rgba(37, 211, 102, 0.4), 0 4px 12px -2px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Official WhatsApp SVG Icon */}
        <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 shrink-0">
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

        {/* Desktop Expandable Text Label */}
        <span
          className={`hidden md:inline-block whitespace-nowrap font-sans font-medium text-xs lg:text-sm tracking-wide overflow-hidden transition-all duration-300 ease-out ${
            isHovered ? 'max-w-xs opacity-100 pl-2.5 pr-2' : 'max-w-0 opacity-0 pl-0 pr-0'
          }`}
        >
          Book Appointment via WhatsApp
        </span>
      </a>
    </aside>
  );
};

export default FloatingWhatsAppButton;
