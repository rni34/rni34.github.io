import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'info' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'gray',
  size = 'md',
  className = ''
}) => {
  const variantClasses = {
    primary: 'bg-primary-100 text-primary-700 border-primary-200',
    success: 'bg-success-100 text-success-700 border-success-200',
    warning: 'bg-warning-100 text-warning-700 border-warning-200',
    info: 'bg-info-100 text-info-700 border-info-200',
    gray: 'bg-gray-100 text-gray-700 border-gray-200'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const baseClasses = `
    inline-flex 
    items-center 
    rounded-full 
    border 
    font-medium
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <span className={baseClasses}>
      {children}
    </span>
  );
};

export default Badge;