
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { ChevronRight } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="section bg-smart-blue/5">
      <div className="container-tight">
        <SectionHeading 
          title="Our Smart Products" 
          subtitle="Discover our range of premium smart devices designed to transform your home into an intelligent living space."
        />
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Smart Hub Controller</h3>
            <p className="text-smart-dark-gray mb-6">
              The central brain of your smart home system. Our Hub Controller connects all your smart 
              devices through a secure, high-speed network, enabling seamless communication and control.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Connects up to 100 smart devices",
                "Advanced encryption for ultimate security",
                "Voice control integration",
                "Energy monitoring and optimization"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-smart-blue mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="primary" icon={<ChevronRight size={16} />}>
              Learn More
            </Button>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in-right">
            <div className="relative">
              <div className="glass-morphism rounded-2xl p-4 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80" 
                  alt="Smart Hub Controller" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-smart-blue/10 w-24 h-24 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 bg-smart-light-blue/10 w-32 h-32 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
