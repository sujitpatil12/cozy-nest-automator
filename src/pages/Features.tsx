
import React from 'react';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const FeaturesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-20">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
