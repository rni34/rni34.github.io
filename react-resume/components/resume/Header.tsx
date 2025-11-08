import React from 'react';
import Image from 'next/image';

interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github?: string;
}

interface HeaderProps {
  name: string;
  title: string;
  photo: string;
  contact: ContactInfo;
}

export const Header: React.FC<HeaderProps> = ({
  name,
  title,
  photo,
  contact
}) => {
  return (
    <header className="mb-8 pb-6 border-b border-gray-200 print:mb-4 print:pb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
        {/* Professional Photo */}
        <div className="flex-shrink-0">
          <Image
            src={photo}
            alt={`${name} - Professional Photo`}
            width={120}
            height={120}
            className="profile-photo w-30 h-30 rounded-full object-cover border-4 border-primary-500 shadow-card"
            priority
          />
        </div>

        {/* Name and Title */}
        <div className="flex-1 min-w-0">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2 text-rendering-optimized">
            {name}
          </h1>
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            {title}
          </h2>

          {/* Contact Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            {/* Phone */}
            <a 
              href={`tel:${contact.phone}`}
              className="hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              aria-label={`Call ${contact.phone}`}
            >
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                </svg>
                {contact.phone}
              </span>
            </a>

            <span className="text-gray-400" aria-hidden="true">•</span>

            {/* Email */}
            <a 
              href={`mailto:${contact.email}`}
              className="hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              aria-label={`Email ${contact.email}`}
            >
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                {contact.email}
              </span>
            </a>

            <span className="text-gray-400" aria-hidden="true">•</span>

            {/* Location */}
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.757.433l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
              </svg>
              {contact.location}
            </span>

            <span className="text-gray-400" aria-hidden="true">•</span>

            {/* LinkedIn */}
            <a 
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                LinkedIn
              </span>
            </a>

            {/* GitHub (if provided) */}
            {contact.github && (
              <>
                <span className="text-gray-400" aria-hidden="true">•</span>
                <a 
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;