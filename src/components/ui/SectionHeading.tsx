
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className,
  titleClassName,
  subtitleClassName
}) => {
  return (
    <div className={cn(
      'mb-12',
      centered ? 'text-center' : 'text-left',
      className
    )}>
      <div className="inline-block">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-smart-black mb-3",
          titleClassName
        )}>
          {title}
        </h2>
        <div className="h-1 w-12 bg-smart-blue rounded-full mx-auto my-4"></div>
      </div>
      {subtitle && (
        <p className={cn(
          "text-lg text-smart-dark-gray max-w-2xl mx-auto mt-4 text-balance",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
