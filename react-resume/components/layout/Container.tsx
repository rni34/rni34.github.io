import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '5xl' | '8xl';
  padding?: boolean;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '5xl',
  padding = true,
  className = ''
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '5xl': 'max-w-5xl',
    '8xl': 'max-w-8xl'
  };

  const baseClasses = `
    mx-auto
    ${maxWidthClasses[maxWidth]}
    ${padding ? 'px-4 sm:px-6 lg:px-8' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

export default Container;