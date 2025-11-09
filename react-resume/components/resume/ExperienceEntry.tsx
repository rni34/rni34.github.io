import React from 'react';

interface ExperienceEntryProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  title,
  company,
  duration,
  description,
  achievements,
  technologies = []
}) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-base font-bold text-gray-900">
          {title}
        </h3>
        <span className="text-sm text-gray-600">
          {duration}
        </span>
      </div>
      <h4 className="text-sm font-semibold text-gray-700 mb-2">
        {company}
      </h4>
      
      {description && (
        <p className="text-sm text-gray-700 mb-2">
          {description}
        </p>
      )}

      <ul className="list-disc ml-5 space-y-1 mb-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-sm text-gray-800">
            {achievement}
          </li>
        ))}
      </ul>

      {technologies.length > 0 && (
        <div className="text-xs text-gray-600">
          <strong>Technologies:</strong> {technologies.join(', ')}
        </div>
      )}
    </div>
  );
};

export default ExperienceEntry;
