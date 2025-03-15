
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  className 
}) => {
  return (
    <div className={cn(
      'bg-white rounded-2xl p-8 shadow-card transition-all duration-300 hover-lift',
      className
    )}>
      <div className="p-4 bg-smart-blue/10 text-smart-blue rounded-xl w-fit mb-6">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-3 text-smart-black">{title}</h3>
      <p className="text-smart-dark-gray/80 text-balance">{description}</p>
    </div>
  );
};

export default FeatureCard;
