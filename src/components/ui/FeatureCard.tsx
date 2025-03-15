
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  linkable?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  className,
  linkable = false
}) => {
  const cardContent = (
    <>
      <div className="p-4 bg-smart-blue/10 text-smart-blue rounded-xl w-fit mb-6">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-3 text-smart-black">{title}</h3>
      <p className="text-smart-dark-gray/80 text-balance">{description}</p>
    </>
  );

  const cardClasses = cn(
    'bg-white rounded-2xl p-8 shadow-card transition-all duration-300 hover-lift',
    className
  );

  if (linkable) {
    return (
      <Link to="/features" className={cardClasses}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
};

export default FeatureCard;
