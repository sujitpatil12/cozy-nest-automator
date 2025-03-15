
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button-shadcn';
import { Vote as VoteIcon, AlertCircle, Check } from 'lucide-react';
import CandidateCard, { Candidate } from '@/components/CandidateCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Vote = () => {
  const { electionId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCandidateId, setSelectedCandidateId] = useState<number | undefined>();
  const [voterId, setVoterId] = useState('');
  const [step, setStep] = useState<'verify' | 'vote' | 'confirm'>('verify');
  
  // Mock election data (in a real app, this would come from an API)
  const election = {
    id: 1,
    title: "General Election 2023",
    description: "Presidential and House of Representatives election",
    startDate: "2023-11-05",
    endDate: "2023-11-05"
  };
  
  // Mock candidates data
  const candidates: Candidate[] = [
    {
      id: 1,
      name: "Jane Smith",
      party: "Progressive Party",
      position: "Presidential Candidate",
      bio: "Former state governor with 15 years of public service experience. Focused on healthcare and education reform."
    },
    {
      id: 2,
      name: "John Davis",
      party: "Liberty Party",
      position: "Presidential Candidate",
      bio: "Business leader and entrepreneur with expertise in economic development and job creation initiatives."
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      party: "Unity Alliance",
      position: "Presidential Candidate",
      bio: "Community organizer and civil rights advocate with a platform focusing on equality and social justice."
    },
    {
      id: 4,
      name: "Robert Chen",
      party: "Independent",
      position: "Presidential Candidate",
      bio: "Technology innovator and public policy expert proposing modernization of government systems."
    }
  ];

  const handleVoterIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoterId(e.target.value);
  };

  const handleVerifyVoter = () => {
    // In a real app, this would verify the voter's eligibility with the blockchain
    if (voterId.length < 6) {
      toast({
        title: "Verification Error",
        description: "Please enter a valid voter ID (minimum 6 characters).",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Verification Successful",
      description: "Your identity has been verified. You may now proceed to vote.",
    });
    setStep('vote');
  };

  const handleCandidateSelect = (candidateId: number) => {
    setSelectedCandidateId(candidateId);
  };

  const handleSubmitVote = () => {
    // In a real app, this would submit the vote to the blockchain
    if (selectedCandidateId === undefined) {
      toast({
        title: "Vote Error",
        description: "Please select a candidate before submitting your vote.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Vote Submitted",
      description: "Your vote has been recorded on the blockchain successfully.",
    });
    setStep('confirm');
  };

  const handleFinish = () => {
    navigate('/results');
  };

  const renderVerificationStep = () => (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Voter Verification</CardTitle>
        <CardDescription>
          Enter your voter ID to verify your eligibility to vote in this election.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="voterId" className="text-sm font-medium">
            Voter ID
          </label>
          <Input
            id="voterId"
            placeholder="Enter your voter ID"
            value={voterId}
            onChange={handleVoterIdChange}
          />
          <p className="text-xs text-muted-foreground">
            Your voter ID was provided in your registration confirmation.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleVerifyVoter} 
          className="w-full"
          disabled={!voterId}
        >
          Verify Identity
        </Button>
      </CardFooter>
    </Card>
  );

  const renderVotingStep = () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">{election.title}</h2>
        <p className="text-muted-foreground">{election.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {candidates.map(candidate => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            selectedCandidateId={selectedCandidateId}
            onSelectCandidate={handleCandidateSelect}
          />
        ))}
      </div>
      
      <div className="flex justify-end mt-8">
        <Button
          onClick={handleSubmitVote}
          disabled={selectedCandidateId === undefined}
          className="flex items-center gap-2"
        >
          <VoteIcon className="h-4 w-4" />
          Cast Your Vote
        </Button>
      </div>
    </div>
  );

  const renderConfirmationStep = () => {
    const selectedCandidate = candidates.find(c => c.id === selectedCandidateId);
    
    return (
      <Card className="max-w-md mx-auto text-center">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <CardTitle>Vote Confirmed</CardTitle>
          <CardDescription>
            Your vote has been securely recorded on the blockchain
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium">You voted for:</p>
            <h3 className="text-xl font-bold">{selectedCandidate?.name}</h3>
            <p className="text-sm text-primary">{selectedCandidate?.party}</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Transaction ID:</p>
            <p className="font-mono bg-muted p-2 rounded mt-1">0x8f7d3a9c2e5b1f4d6a7c8b9d0e3f2a1b</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button onClick={handleFinish} className="w-full">
            View Election Results
          </Button>
          <Button variant="outline" onClick={() => navigate('/')} className="w-full">
            Return to Homepage
          </Button>
        </CardFooter>
      </Card>
    );
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 'verify':
        return renderVerificationStep();
      case 'vote':
        return renderVotingStep();
      case 'confirm':
        return renderConfirmationStep();
      default:
        return renderVerificationStep();
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container">
        <div className="mb-8">
          <div className="flex justify-center mb-8">
            <ul className="flex items-center">
              <li className={`flex items-center ${step === 'verify' || step === 'vote' || step === 'confirm' ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full ${step === 'verify' || step === 'vote' || step === 'confirm' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'} flex items-center justify-center mr-2`}>
                  1
                </div>
                <span className="mr-8">Verify</span>
              </li>
              <li className={`flex items-center ${step === 'vote' || step === 'confirm' ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full ${step === 'vote' || step === 'confirm' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'} flex items-center justify-center mr-2`}>
                  2
                </div>
                <span className="mr-8">Vote</span>
              </li>
              <li className={`flex items-center ${step === 'confirm' ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full ${step === 'confirm' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'} flex items-center justify-center mr-2`}>
                  3
                </div>
                <span>Confirm</span>
              </li>
            </ul>
          </div>
        </div>
        
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default Vote;
