import React from 'react';

interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  showValue?: boolean;
  variant?: 'primary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  showValue = false,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const variantClasses = {
    primary: 'bg-primary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    info: 'bg-info-500'
  };

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1">
          {label && (
            <span className="text-sm font-medium text-gray-700">{label}</span>
          )}
          {showValue && (
            <span className="text-sm text-gray-500">{clampedValue}%</span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`progress-bar ${variantClasses[variant]} ${sizeClasses[size]} rounded-full transition-all duration-1000 ease-out`}
          style={{ 
            '--progress-width': `${clampedValue}%`,
            width: `${clampedValue}%`
          } as React.CSSProperties}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label || `Progress: ${clampedValue}%`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;