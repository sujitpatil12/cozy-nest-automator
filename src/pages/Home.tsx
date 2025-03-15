
import React from 'react';
import VotingHero from '@/components/VotingHero';
import VotingProcess from '@/components/VotingProcess';
import VotingBenefits from '@/components/VotingBenefits';
import ElectionList from '@/components/ElectionList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Home = () => {
  return (
    <div className="min-h-screen">
      <VotingHero />
      
      <Tabs defaultValue="elections" className="container px-4 md:px-6 py-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="elections">Elections</TabsTrigger>
          <TabsTrigger value="process">Process</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
        </TabsList>
        <TabsContent value="elections">
          <ElectionList />
        </TabsContent>
        <TabsContent value="process">
          <VotingProcess />
        </TabsContent>
        <TabsContent value="benefits">
          <VotingBenefits />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Home;
