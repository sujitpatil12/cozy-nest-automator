
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#contact" },
        { name: "Blog", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Installation", href: "#" },
        { name: "Updates", href: "#" },
        { name: "FAQs", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Warranty", href: "#" },
        { name: "Licenses", href: "#" },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <a href="#" className="text-2xl font-bold text-smart-black">
                Smart<span className="text-smart-blue">Home</span>
              </a>
            </div>
            <p className="text-smart-dark-gray mb-6 max-w-md">
              Transforming houses into intelligent living spaces. Our smart home automation 
              system brings convenience, security, and efficiency to your fingertips.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  className="p-2 bg-smart-gray rounded-full text-smart-dark-gray hover:bg-smart-blue hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-smart-black mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-smart-dark-gray hover:text-smart-blue transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-smart-gray/60 text-center text-smart-dark-gray/70 text-sm">
          <p>© {currentYear} SmartHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
