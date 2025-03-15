
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import DeviceCard from './ui/DeviceCard';
import Button from './ui/Button';
import { Lightbulb, Lock, Thermometer, Camera, Plus } from 'lucide-react';

const DeviceDashboard: React.FC = () => {
  const devices = [
    {
      name: "Living Room Lights",
      icon: <Lightbulb size={24} />,
      type: "light" as const,
      isOn: true
    },
    {
      name: "Front Door Lock",
      icon: <Lock size={24} />,
      type: "lock" as const,
      isOn: false
    },
    {
      name: "Bedroom Temperature",
      icon: <Thermometer size={24} />,
      type: "thermostat" as const,
      isOn: true
    },
    {
      name: "Security Camera",
      icon: <Camera size={24} />,
      type: "camera" as const,
      isOn: true
    }
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-smart-blue/5 to-transparent -z-10"></div>
      
      <div className="container-tight">
        <SectionHeading 
          title="Smart Control Dashboard" 
          subtitle="Monitor and control all your connected devices from one central interface. Simple, intuitive, and powerful."
        />
        
        <div className="glass-morphism rounded-3xl p-6 md:p-10 shadow-lg max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold">Your Devices</h3>
            <Button variant="outline" size="sm" icon={<Plus size={16} />}>
              Add Device
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {devices.map((device, index) => (
              <DeviceCard
                key={device.name}
                name={device.name}
                icon={device.icon}
                type={device.type}
                isOn={device.isOn}
                className={`animate-fade-in animate-delay-${index * 100}`}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button>View All Devices</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceDashboard;
