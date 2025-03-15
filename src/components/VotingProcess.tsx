
import React from 'react';
import { UserCheck, ShieldCheck, Box, CheckSquare } from 'lucide-react';

const VotingProcess = () => {
  const steps = [
    {
      icon: <UserCheck className="h-12 w-12 text-primary" />,
      title: "Voter Verification",
      description: "Authenticate your identity securely through our blockchain verification process."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: "Secure Ballot",
      description: "Access your unique encrypted ballot that ensures your vote remains private."
    },
    {
      icon: <Box className="h-12 w-12 text-primary" />,
      title: "Cast Your Vote",
      description: "Select your candidate and submit your vote to the blockchain network."
    },
    {
      icon: <CheckSquare className="h-12 w-12 text-primary" />,
      title: "Verification & Confirmation",
      description: "Receive confirmation of your submitted vote with a unique transaction ID."
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our blockchain voting system ensures security, transparency, and accuracy at every step.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start gap-4 bg-background p-6 rounded-xl shadow-sm transition-all hover:shadow-md">
              <div className="rounded-lg bg-primary/10 p-3">
                {step.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VotingProcess;
