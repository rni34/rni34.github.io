import React from 'react';

interface ProfessionalSummaryProps {
  summary: string;
}

export const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({
  summary
}) => {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase">
        Professional Summary
      </h2>
      <p className="text-sm text-gray-800 leading-relaxed">
        {summary}
      </p>
    </section>
  );
};

export default ProfessionalSummary;