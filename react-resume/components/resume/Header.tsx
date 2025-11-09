import React from 'react';

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
  contact: ContactInfo;
}

export const Header: React.FC<HeaderProps> = ({
  name,
  title,
  contact
}) => {
  return (
    <header className="mb-6 pb-4 border-b-2 border-gray-900">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          {name}
        </h1>
        <h2 className="text-base text-gray-700 mb-3">
          {title}
        </h2>

        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          <span>{contact.phone}</span>
          <span>•</span>
          <span>{contact.email}</span>
          <span>•</span>
          <span>{contact.location}</span>
          <span>•</span>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="underline">
            LinkedIn
          </a>
          {contact.github && (
            <>
              <span>•</span>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="underline">
                GitHub
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;