import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

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
    <Card className="experience-entry mb-6 hover:shadow-card-hover transition-shadow duration-200" hover>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {title}
          </h3>
          <h4 className="text-lg font-medium text-primary-600 mb-2">
            {company}
          </h4>
        </div>
        <div className="flex-shrink-0 sm:ml-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {duration}
          </span>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-gray-700 mb-4 leading-relaxed">
          {description}
        </p>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="mb-4">
          <h5 className="sr-only">Key Achievements</h5>
          <ul className="space-y-2" role="list">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <svg 
                  className="w-2 h-2 mt-2 mr-3 text-primary-500 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 8 8"
                  aria-hidden="true"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
                <span className="text-gray-700 leading-relaxed text-rendering-optimized">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="pt-4 border-t border-gray-200">
          <h5 className="text-sm font-medium text-gray-500 mb-2">
            Technologies Used:
          </h5>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="primary" 
                size="sm"
                className="text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default ExperienceEntry;