import React from 'react';
import Card from '../ui/Card';

interface SidebarCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const SidebarCard: React.FC<SidebarCardProps> = ({
  title,
  children,
  icon,
  className = ''
}) => {
  return (
    <Card className={`sidebar-card ${className}`}>
      <div className="flex items-center mb-4">
        {icon && (
          <div className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0" aria-hidden="true">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </Card>
  );
};

// Education Item Component
interface EducationItemProps {
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
  honors?: string;
}

export const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  year,
  gpa,
  honors
}) => {
  return (
    <div className="education-item">
      <h4 className="font-semibold text-gray-900 text-sm">
        {degree}
      </h4>
      <p className="text-gray-600 text-sm">
        {institution}
      </p>
      <div className="flex items-center justify-between mt-1">
        <span className="text-gray-500 text-xs">
          {year}
        </span>
        {gpa && (
          <span className="text-gray-500 text-xs">
            GPA: {gpa}
          </span>
        )}
      </div>
      {honors && (
        <p className="text-primary-600 text-xs mt-1 font-medium">
          {honors}
        </p>
      )}
    </div>
  );
};

// Award Item Component
interface AwardItemProps {
  title: string;
  organization: string;
  year?: string;
  description?: string;
}

export const AwardItem: React.FC<AwardItemProps> = ({
  title,
  organization,
  year,
  description
}) => {
  return (
    <div className="award-item">
      <h4 className="font-semibold text-gray-900 text-sm">
        {title}
      </h4>
      <p className="text-primary-600 text-sm">
        {organization}
      </p>
      {year && (
        <p className="text-gray-500 text-xs mt-1">
          {year}
        </p>
      )}
      {description && (
        <p className="text-gray-600 text-xs mt-2 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

// Content Item Component (for videos, articles, etc.)
interface ContentItemProps {
  title: string;
  description: string;
  url?: string;
  type?: 'video' | 'article' | 'presentation' | 'other';
}

export const ContentItem: React.FC<ContentItemProps> = ({
  title,
  description,
  url,
  type = 'other'
}) => {
  const typeIcons = {
    video: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h1a1 1 0 010 2H6a1 1 0 01-1-1zm6 1a1 1 0 100 2h3a1 1 0 100-2h-3z" />
      </svg>
    ),
    article: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    ),
    presentation: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    ),
    other: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
      </svg>
    )
  };

  const content = (
    <div className="content-item">
      <div className="flex items-start gap-2">
        <div className="text-primary-600 mt-0.5 flex-shrink-0">
          {typeIcons[type]}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-primary-600 text-sm hover:text-primary-700 transition-colors">
            {title}
          </h4>
          <p className="text-gray-600 text-xs mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:bg-gray-50 -mx-2 px-2 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        aria-label={`${title} (opens in new tab)`}
      >
        {content}
      </a>
    );
  }

  return content;
};

// Simple List Item Component
interface ListItemProps {
  children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return (
    <div className="text-sm text-gray-700">
      {children}
    </div>
  );
};

export default SidebarCard;