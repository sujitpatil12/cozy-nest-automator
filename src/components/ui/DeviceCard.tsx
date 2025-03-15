
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Lock, LockOpen, Power } from 'lucide-react';

interface DeviceCardProps {
  name: string;
  icon: React.ReactNode;
  isOn?: boolean;
  type: 'light' | 'lock' | 'thermostat' | 'camera';
  className?: string;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ 
  name, 
  icon, 
  type,
  isOn = false,
  className 
}) => {
  const [active, setActive] = useState(isOn);
  
  const handleToggle = () => {
    setActive(!active);
  };
  
  return (
    <div 
      className={cn(
        'glass-morphism rounded-2xl p-6 transition-all duration-300 hover-lift',
        active ? 'border-smart-blue/30' : 'border-white/20',
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={cn(
          'p-3 rounded-xl',
          active ? 'text-smart-blue bg-smart-blue/10' : 'text-smart-dark-gray/70 bg-smart-gray/50'
        )}>
          {icon}
        </div>
        <button 
          onClick={handleToggle}
          className={cn(
            'relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none',
            active ? 'bg-smart-blue' : 'bg-smart-dark-gray/20'
          )}
        >
          <span 
            className={cn(
              'absolute top-1 left-1 w-4 h-4 rounded-full bg-white transform transition-transform duration-300',
              active ? 'translate-x-6' : 'translate-x-0'
            )} 
          />
        </button>
      </div>
      <h3 className="font-medium text-lg">{name}</h3>
      <div className="mt-2 text-smart-dark-gray/70 text-sm">
        {type === 'lock' ? (
          <div className="flex items-center">
            {active ? <LockOpen size={14} className="mr-1" /> : <Lock size={14} className="mr-1" />}
            <span>{active ? 'Unlocked' : 'Locked'}</span>
          </div>
        ) : (
          <div className="flex items-center">
            <Power size={14} className="mr-1" />
            <span>{active ? 'On' : 'Off'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceCard;
