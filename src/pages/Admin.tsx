
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button-shadcn';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Calendar } from '@/components/ui/calendar';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { 
  Plus, 
  Trash2, 
  Edit, 
  Upload, 
  Download, 
  UserPlus, 
  Settings, 
  PlayCircle, 
  Pause, 
  Power, 
  Lock
} from 'lucide-react';

const Admin = () => {
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState('elections');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Mock election data
  const elections = [
    {
      id: 1,
      title: "General Election 2023",
      status: "active",
      startDate: "2023-11-05",
      endDate: "2023-11-05",
      candidates: 4,
      voters: 2956
    },
    {
      id: 2,
      title: "Local City Council",
      status: "upcoming",
      startDate: "2023-11-10",
      endDate: "2023-11-12",
      candidates: 12,
      voters: 1245
    },
    {
      id: 3,
      title: "University Student Body",
      status: "ended",
      startDate: "2023-10-15",
      endDate: "2023-10-16",
      candidates: 8,
      voters: 876
    }
  ];
  
  // Mock candidate data
  const candidates = [
    { id: 1, name: "Jane Smith", party: "Progressive Party", position: "Presidential Candidate", votes: 1256 },
    { id: 2, name: "John Davis", party: "Liberty Party", position: "Presidential Candidate", votes: 876 },
    { id: 3, name: "Maria Rodriguez", party: "Unity Alliance", position: "Presidential Candidate", votes: 543 },
    { id: 4, name: "Robert Chen", party: "Independent", position: "Presidential Candidate", votes: 281 }
  ];
  
  // Mock voters
  const voters = [
    { id: "V001", name: "Alex Johnson", email: "alex@example.com", verified: true, voted: true },
    { id: "V002", name: "Sarah Williams", email: "sarah@example.com", verified: true, voted: true },
    { id: "V003", name: "Michael Brown", email: "michael@example.com", verified: true, voted: false },
    { id: "V004", name: "Emily Davis", email: "emily@example.com", verified: false, voted: false },
    { id: "V005", name: "Daniel Miller", email: "daniel@example.com", verified: true, voted: true }
  ];

  const handleCreateElection = () => {
    toast({
      title: "Feature Not Implemented",
      description: "This would create a new election in a real application.",
    });
  };

  const handleAddCandidate = () => {
    toast({
      title: "Feature Not Implemented",
      description: "This would add a new candidate in a real application.",
    });
  };

  const handleAddVoter = () => {
    toast({
      title: "Feature Not Implemented",
      description: "This would add a new voter in a real application.",
    });
  };

  const handleBlockchainAction = () => {
    toast({
      title: "Blockchain Connection Required",
      description: "Connect to the blockchain network to perform this action.",
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tighter">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage elections, candidates, voters, and view blockchain status</p>
        </div>
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-8">
          <TabsList className="grid grid-cols-4 gap-2 w-full max-w-4xl">
            <TabsTrigger value="elections">Elections</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="voters">Voters</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          </TabsList>
          
          <TabsContent value="elections" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Manage Elections</h2>
              <Button onClick={handleCreateElection} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Election
              </Button>
            </div>
            
            <Table>
              <TableCaption>List of all elections in the system</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Dates</TableHead>
                  <TableHead>Candidates</TableHead>
                  <TableHead>Registered Voters</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {elections.map((election) => (
                  <TableRow key={election.id}>
                    <TableCell className="font-medium">{election.title}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        election.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : election.status === 'upcoming' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {election.status.charAt(0).toUpperCase() + election.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>{election.startDate} to {election.endDate}</TableCell>
                    <TableCell>{election.candidates}</TableCell>
                    <TableCell>{election.voters.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {election.status === 'upcoming' && (
                          <Button variant="outline" size="sm">
                            <PlayCircle className="h-4 w-4" />
                          </Button>
                        )}
                        {election.status === 'active' && (
                          <Button variant="outline" size="sm">
                            <Pause className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <Card>
              <CardHeader>
                <CardTitle>Create New Election</CardTitle>
                <CardDescription>Set up a new voting event on the blockchain</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="election-title" className="text-sm font-medium">Election Title</label>
                  <Input id="election-title" placeholder="Enter election title" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="election-description" className="text-sm font-medium">Description</label>
                  <Input id="election-description" placeholder="Enter election description" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Start Date</label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">End Date</label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="border rounded-md"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleCreateElection}>Create Election</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="candidates" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Manage Candidates</h2>
              <Button onClick={handleAddCandidate} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Candidate
              </Button>
            </div>
            
            <Table>
              <TableCaption>All candidates for the current elections</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Party</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Votes</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {candidates.map((candidate) => (
                  <TableRow key={candidate.id}>
                    <TableCell className="font-medium">{candidate.name}</TableCell>
                    <TableCell>{candidate.party}</TableCell>
                    <TableCell>{candidate.position}</TableCell>
                    <TableCell>{candidate.votes.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <Card>
              <CardHeader>
                <CardTitle>Add New Candidate</CardTitle>
                <CardDescription>Register a candidate for an election</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="candidate-name" className="text-sm font-medium">Candidate Name</label>
                  <Input id="candidate-name" placeholder="Enter candidate name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="candidate-party" className="text-sm font-medium">Party Affiliation</label>
                  <Input id="candidate-party" placeholder="Enter party name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="candidate-position" className="text-sm font-medium">Position</label>
                  <Input id="candidate-position" placeholder="Enter position" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="candidate-bio" className="text-sm font-medium">Biography</label>
                  <Input id="candidate-bio" placeholder="Enter candidate biography" />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleAddCandidate}>Add Candidate</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="voters" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Manage Voters</h2>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Import Voters
                </Button>
                <Button onClick={handleAddVoter} className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Add Voter
                </Button>
              </div>
            </div>
            
            <Table>
              <TableCaption>Registered voters in the system</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Verified</TableHead>
                  <TableHead>Voted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {voters.map((voter) => (
                  <TableRow key={voter.id}>
                    <TableCell className="font-medium">{voter.id}</TableCell>
                    <TableCell>{voter.name}</TableCell>
                    <TableCell>{voter.email}</TableCell>
                    <TableCell>
                      <Switch checked={voter.verified} />
                    </TableCell>
                    <TableCell>
                      {voter.voted ? 
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Yes
                        </span> : 
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          No
                        </span>
                      }
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Voter</CardTitle>
                  <CardDescription>Register an individual voter</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="voter-name" className="text-sm font-medium">Full Name</label>
                    <Input id="voter-name" placeholder="Enter full name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="voter-email" className="text-sm font-medium">Email Address</label>
                    <Input id="voter-email" type="email" placeholder="Enter email address" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="voter-id" className="text-sm font-medium">ID Number</label>
                    <Input id="voter-id" placeholder="Enter identification number" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleAddVoter}>Register Voter</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Bulk Import</CardTitle>
                  <CardDescription>Upload a CSV file with voter information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Drag and drop your CSV file here, or click to browse
                    </p>
                    <Button variant="outline" className="mt-4">Select File</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    File must include columns for name, email, and ID number. Maximum 1000 voters per upload.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Template
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="blockchain" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Blockchain Management</h2>
              <Button variant="outline" onClick={handleBlockchainAction} className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Network Settings
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Blockchain Status</CardTitle>
                  <CardDescription>Current state of the voting blockchain</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="font-medium">Network Status</span>
                    </div>
                    <span>Online</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-medium">Block Height</span>
                    <span>1,243,567</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-medium">Active Validators</span>
                    <span>15/15</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-medium">Last Block Time</span>
                    <span>30 seconds ago</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handleBlockchainAction}>
                    <Power className="mr-2 h-4 w-4" />
                    Restart Node
                  </Button>
                  <Button onClick={handleBlockchainAction}>
                    View Explorer
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Smart Contracts</CardTitle>
                  <CardDescription>Deployed voting contracts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Contract</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">ElectionFactory</TableCell>
                        <TableCell className="font-mono text-xs">0x8c7d3a9c2e5b1f4d...</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={handleBlockchainAction}>
                            <Lock className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">VoterRegistry</TableCell>
                        <TableCell className="font-mono text-xs">0x7b6e5d4c3b2a1f0e...</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={handleBlockchainAction}>
                            <Lock className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">BallotSystem</TableCell>
                        <TableCell className="font-mono text-xs">0x2a3b4c5d6e7f8a9b...</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={handleBlockchainAction}>
                            <Lock className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleBlockchainAction} className="w-full">
                    Deploy New Contract
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Recent blockchain transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction Hash</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Block</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono text-xs">0x7c8b9a0d1e2f3c4...</TableCell>
                      <TableCell>Vote Cast</TableCell>
                      <TableCell>2 mins ago</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Confirmed
                        </span>
                      </TableCell>
                      <TableCell className="text-right">1,243,567</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-xs">0x3f4e5d6c7b8a9d0...</TableCell>
                      <TableCell>Voter Registration</TableCell>
                      <TableCell>15 mins ago</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Confirmed
                        </span>
                      </TableCell>
                      <TableCell className="text-right">1,243,560</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-xs">0x1a2b3c4d5e6f7g8...</TableCell>
                      <TableCell>Contract Call</TableCell>
                      <TableCell>32 mins ago</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Confirmed
                        </span>
                      </TableCell>
                      <TableCell className="text-right">1,243,552</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={handleBlockchainAction}>
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
