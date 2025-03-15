
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button-shadcn';
import { Shield, Vote, CheckCircle } from 'lucide-react';

const VotingHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Secure Blockchain Voting System
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Vote with confidence using our transparent, secure, and immutable blockchain-based voting platform.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <Button asChild size="lg">
                <Link to="/vote">Cast Your Vote</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/results">View Results</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto flex justify-center">
            <div className="relative bg-gradient-to-b from-primary/20 to-primary/5 p-8 rounded-2xl w-full max-w-md">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4">
                  <Shield className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-medium">Secure & Transparent</h3>
                    <p className="text-sm text-muted-foreground">Built on blockchain technology</p>
                  </div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4">
                  <Vote className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-medium">Easy Voting</h3>
                    <p className="text-sm text-muted-foreground">Simple and intuitive process</p>
                  </div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4">
                  <CheckCircle className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-medium">Immutable Results</h3>
                    <p className="text-sm text-muted-foreground">Tamper-proof vote records</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VotingHero;
