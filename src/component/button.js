
import React from 'react';

const Button = ({ className, variant, children }) => {
  const baseClass = 'py-2 px-4 rounded focus:outline-none';

  const getColorClasses = () => {
    if (variant === 'outline') {
      return 'border border-white text-white';
    } else if (variant === 'ghost') {
      return 'text-white bg-transparent';
    } else {
      return 'bg-white text-[#4c3398]';
    }
  };

  return (
    <button className={`${baseClass} ${getColorClasses()} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
