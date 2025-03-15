
import React from 'react';
import { Shield, LockKeyhole, TrendingUp, Clock, Database, UserCheck } from 'lucide-react';

const VotingBenefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Enhanced Security",
      description: "Blockchain technology ensures that votes cannot be tampered with or altered once recorded."
    },
    {
      icon: <LockKeyhole className="h-10 w-10 text-primary" />,
      title: "Vote Privacy",
      description: "Your vote is encrypted and anonymized, protecting your identity while maintaining vote integrity."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Increased Participation",
      description: "Easy access and user-friendly interface lead to higher voter turnout rates."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Real-time Results",
      description: "Get immediate feedback and transparency with automatic vote counting and result tabulation."
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Immutable Record",
      description: "All votes are permanently recorded on the blockchain, creating an unalterable voting history."
    },
    {
      icon: <UserCheck className="h-10 w-10 text-primary" />,
      title: "Verifiable Authenticity",
      description: "Voters can verify their vote was counted correctly without compromising ballot secrecy."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefits of Blockchain Voting</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our platform leverages blockchain technology to provide a secure, transparent, and efficient voting experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 space-y-4 rounded-xl border bg-card shadow-sm transition-all hover:shadow">
              <div className="rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center">
                {benefit.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VotingBenefits;
