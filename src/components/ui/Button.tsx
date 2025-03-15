
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  icon,
  className,
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-smart-blue/40";
  
  const variantStyles = {
    primary: "bg-smart-blue text-white hover:bg-smart-dark-blue shadow-button hover:shadow-lg",
    secondary: "bg-white text-smart-dark-gray hover:bg-smart-gray border border-smart-gray/30",
    outline: "bg-transparent border border-smart-blue text-smart-blue hover:bg-smart-blue/10",
    ghost: "bg-transparent text-smart-dark-gray hover:bg-smart-gray/50"
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-1.5",
    md: "text-base px-6 py-2.5",
    lg: "text-lg px-8 py-3"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
