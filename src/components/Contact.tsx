
import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your backend
      console.log('Email submitted:', email);
      setSubmitted(true);
      setEmail('');
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="section bg-smart-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-smart-blue/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-smart-light-blue/20 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container-tight">
        <SectionHeading 
          title="Stay Connected" 
          subtitle="Subscribe to our newsletter to receive updates, tips, and exclusive offers for your smart home."
          className="text-white"
        />
        
        <div className="max-w-xl mx-auto glass-morphism bg-white/5 rounded-2xl p-8 border border-white/10">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-smart-blue/20 rounded-full">
              <Mail size={24} className="text-smart-blue" />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-smart-blue/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full py-4"
              icon={<Send size={16} />}
            >
              {submitted ? 'Thank you!' : 'Subscribe'}
            </Button>
          </form>
          
          <p className="text-white/70 text-sm text-center mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
