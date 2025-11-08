import React from 'react';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import Badge from '../ui/Badge';

interface Skill {
  name: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate' | 'Familiar';
  years?: number;
}

interface SkillCategory {
  name: string;
  icon?: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  categories: SkillCategory[];
}

const proficiencyToPercentage = {
  'Expert': 95,
  'Advanced': 80,
  'Intermediate': 65,
  'Familiar': 45
};

const proficiencyToVariant = {
  'Expert': 'success' as const,
  'Advanced': 'primary' as const,
  'Intermediate': 'info' as const,
  'Familiar': 'warning' as const
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories
}) => {
  return (
    <section className="mb-8 print:mb-4" aria-labelledby="technical-skills">
      <h2 
        id="technical-skills"
        className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-primary-600 pl-3"
      >
        Technical Skills
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {categories.map((category, categoryIndex) => (
          <Card 
            key={categoryIndex} 
            className="skills-category"
            hover
          >
            <div className="flex items-center mb-4">
              {category.icon && (
                <div className="w-6 h-6 mr-3 text-primary-600" aria-hidden="true">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900">
                {category.name}
              </h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">
                        {skill.name}
                      </span>
                      {skill.years && (
                        <span className="text-sm text-gray-500">
                          ({skill.years}+ years)
                        </span>
                      )}
                    </div>
                    <Badge 
                      variant={proficiencyToVariant[skill.proficiency]}
                      size="sm"
                    >
                      {skill.proficiency}
                    </Badge>
                  </div>
                  
                  <ProgressBar
                    value={proficiencyToPercentage[skill.proficiency]}
                    variant={proficiencyToVariant[skill.proficiency]}
                    size="sm"
                    aria-label={`${skill.name} proficiency: ${skill.proficiency}`}
                  />
                </div>
              ))}
            </div>

            {/* Alternative compact view for print */}
            <div className="hidden print:block print:mt-4">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="text-sm text-gray-700"
                  >
                    {skill.name}
                    {skill.years && ` (${skill.years}+ years)`}
                    {skillIndex < category.skills.length - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;