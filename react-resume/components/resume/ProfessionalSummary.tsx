import React from 'react';
import Card from '../ui/Card';

interface ProfessionalSummaryProps {
  summary: string;
}

export const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({
  summary
}) => {
  return (
    <section className="mb-8 print:mb-4" aria-labelledby="professional-summary">
      <Card className="bg-gray-50 border-l-4 border-primary-500">
        <h2 
          id="professional-summary"
          className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-primary-600 pl-3"
        >
          Professional Summary
        </h2>
        <div className="text-lg leading-relaxed text-gray-700 text-rendering-optimized">
          {summary.split('. ').map((sentence, index, array) => {
            // Add period back if it's not the last sentence and doesn't already end with punctuation
            const formattedSentence = index < array.length - 1 && !sentence.endsWith('.') && !sentence.endsWith('!') && !sentence.endsWith('?')
              ? sentence + '.'
              : sentence;
            
            return (
              <span key={index}>
                {formattedSentence}
                {index < array.length - 1 && ' '}
              </span>
            );
          })}
        </div>
      </Card>
    </section>
  );
};

export default ProfessionalSummary;