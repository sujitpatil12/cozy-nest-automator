
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleCheck, Shield, Database, Clock } from 'lucide-react';

const BlockchainInfo = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blockchain Technology</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our voting system is built on secure, transparent blockchain technology
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-2">
                <CircleCheck className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Immutable Voting</CardTitle>
              <CardDescription>Once recorded, votes cannot be altered or deleted</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Your vote is permanently recorded on a distributed ledger that cannot be tampered with, ensuring vote integrity.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Enhanced Security</CardTitle>
              <CardDescription>Advanced cryptographic protection</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Military-grade encryption secures the voting process from unauthorized access and manipulation attempts.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-2">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Distributed Network</CardTitle>
              <CardDescription>No single point of failure</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The voting system operates across multiple nodes, eliminating centralized vulnerabilities and ensuring system reliability.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Real-time Verification</CardTitle>
              <CardDescription>Instant vote confirmation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Receive immediate confirmation that your vote was recorded correctly while maintaining complete privacy.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 p-6 bg-background border rounded-xl shadow-sm">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Public Ledger</h3>
              <p className="text-sm text-muted-foreground">
                All transactions are recorded on a public ledger that can be audited by anyone, ensuring complete transparency.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Smart Contracts</h3>
              <p className="text-sm text-muted-foreground">
                Automated execution of election rules through secure, autonomous smart contracts that enforce voting protocols.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Private Key Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Voters use unique private keys to authenticate their identity and ensure only authorized votes are counted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainInfo;
