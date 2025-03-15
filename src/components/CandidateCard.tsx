
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button-shadcn';
import { Check } from 'lucide-react';

export interface Candidate {
  id: number;
  name: string;
  party: string;
  position: string;
  bio: string;
  image?: string;
}

interface CandidateCardProps {
  candidate: Candidate;
  selectedCandidateId?: number;
  onSelectCandidate: (candidateId: number) => void;
  disabled?: boolean;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ 
  candidate, 
  selectedCandidateId,
  onSelectCandidate,
  disabled = false
}) => {
  const isSelected = selectedCandidateId === candidate.id;
  
  return (
    <Card className={`overflow-hidden transition-all ${isSelected ? 'ring-2 ring-primary' : 'hover:shadow-md'}`}>
      <CardHeader className="p-6 pb-0">
        <div className="flex justify-between items-center">
          <Avatar className="h-16 w-16 border-2 border-muted">
            {candidate.image ? (
              <AvatarImage src={candidate.image} alt={candidate.name} />
            ) : (
              <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
            )}
          </Avatar>
          {isSelected && (
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <Check className="h-5 w-5 text-white" />
            </div>
          )}
        </div>
        <CardTitle className="text-xl mt-4">{candidate.name}</CardTitle>
        <CardDescription className="flex flex-col gap-1">
          <span className="text-sm font-medium text-primary">{candidate.party}</span>
          <span className="text-sm">{candidate.position}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground">{candidate.bio}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          variant={isSelected ? "default" : "outline"} 
          className="w-full" 
          onClick={() => onSelectCandidate(candidate.id)}
          disabled={disabled}
        >
          {isSelected ? "Selected" : "Select Candidate"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CandidateCard;
