
import React from 'react';
import Navbar from '@/components/Navbar';
import DeviceDashboard from '@/components/DeviceDashboard';
import Footer from '@/components/Footer';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-20">
        <DeviceDashboard />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
