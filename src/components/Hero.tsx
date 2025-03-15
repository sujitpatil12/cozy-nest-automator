
import React from 'react';
import Button from './ui/Button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-smart-blue/10 rounded-full blur-3xl opacity-60 animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-smart-light-blue/10 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl animate-fade-in">
          <div className="inline-block bg-smart-blue/10 text-smart-blue rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Intelligent Living Simplified
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-smart-black">
            Control Your Home <br />
            <span className="text-smart-blue">With A Touch</span>
          </h1>
          <p className="text-lg text-smart-dark-gray mb-8 text-balance">
            Transform your living space into an intelligent ecosystem. Automate, 
            monitor, and control your home devices from anywhere with our cutting-edge 
            smart home solution.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More <ChevronRight size={18} className="ml-1" />
            </Button>
          </div>
        </div>
        
        <div className="relative md:h-[600px] flex justify-center items-center animate-fade-in-right">
          <div className="relative w-full max-w-md">
            {/* Main image with floating animation */}
            <div className="relative z-10 animate-float">
              <div className="glass-morphism rounded-2xl shadow-lg p-4 md:p-6">
                <img
                  src="https://images.unsplash.com/photo-1558002038-104a9e21d636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
                  alt="Smart Home Control"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-smart-blue animate-pulse-soft"></div>
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 z-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-smart-light-blue/40 animate-pulse-soft animate-delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
