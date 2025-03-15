
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FeatureCard from './ui/FeatureCard';
import { Shield, Zap, Wifi, Clock, Lock, Settings } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Seamless Integration",
      description: "Connect all your devices in one unified ecosystem that works together flawlessly.",
      icon: <Wifi size={24} />
    },
    {
      title: "Energy Efficiency",
      description: "Optimize energy usage with smart controls and scheduling to reduce your carbon footprint.",
      icon: <Zap size={24} />
    },
    {
      title: "Enhanced Security",
      description: "Protect your home with advanced security features including cameras and smart locks.",
      icon: <Shield size={24} />
    },
    {
      title: "Smart Scheduling",
      description: "Set automated routines that adjust to your lifestyle and daily habits.",
      icon: <Clock size={24} />
    },
    {
      title: "Remote Access",
      description: "Control your home from anywhere in the world with our secure mobile application.",
      icon: <Lock size={24} />
    },
    {
      title: "Customizable Settings",
      description: "Personalize your smart home experience with flexible configuration options.",
      icon: <Settings size={24} />
    }
  ];

  return (
    <section id="features" className="section bg-smart-gray/30">
      <div className="container-tight">
        <SectionHeading 
          title="Intelligent Features" 
          subtitle="Our smart home system comes with advanced capabilities designed to make your life easier, safer, and more efficient."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={`animate-fade-in animate-delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
