
import React, { useState } from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button-shadcn';
import { Download, Share2 } from 'lucide-react';

interface ElectionResult {
  id: number;
  candidateName: string;
  party: string;
  votes: number;
  percentage: number;
  color: string;
}

const Results = () => {
  const [viewType, setViewType] = useState<'chart' | 'table'>('chart');
  
  // Mock election results data
  const electionResults: ElectionResult[] = [
    { id: 1, candidateName: "Jane Smith", party: "Progressive Party", votes: 1256, percentage: 42.5, color: "#4338ca" },
    { id: 2, candidateName: "John Davis", party: "Liberty Party", votes: 876, percentage: 29.6, color: "#ef4444" },
    { id: 3, candidateName: "Maria Rodriguez", party: "Unity Alliance", votes: 543, percentage: 18.4, color: "#10b981" },
    { id: 4, candidateName: "Robert Chen", party: "Independent", votes: 281, percentage: 9.5, color: "#f59e0b" }
  ];

  const totalVotes = electionResults.reduce((sum, candidate) => sum + candidate.votes, 0);
  
  // Mock participation data for different regions
  const participationData = [
    { name: 'North Region', participation: 78 },
    { name: 'South Region', participation: 65 },
    { name: 'East Region', participation: 82 },
    { name: 'West Region', participation: 71 },
    { name: 'Central Region', participation: 76 },
  ];
  
  // Format data for recharts
  const pieData = electionResults.map(result => ({
    name: result.candidateName,
    value: result.votes
  }));
  
  // Mock hourly voting activity
  const hourlyData = [
    { hour: '8 AM', votes: 123 },
    { hour: '9 AM', votes: 231 },
    { hour: '10 AM', votes: 345 },
    { hour: '11 AM', votes: 412 },
    { hour: '12 PM', votes: 321 },
    { hour: '1 PM', votes: 273 },
    { hour: '2 PM', votes: 289 },
    { hour: '3 PM', votes: 347 },
    { hour: '4 PM', votes: 431 },
    { hour: '5 PM', votes: 567 },
    { hour: '6 PM', votes: 489 },
    { hour: '7 PM', votes: 129 },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">Election Results</h1>
          <p className="text-muted-foreground md:text-xl">General Election 2023 - Final Results</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Votes Cast</CardTitle>
              <CardDescription>All ballots submitted</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalVotes.toLocaleString()}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Voter Turnout</CardTitle>
              <CardDescription>Percentage of eligible voters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">73.8%</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Winning Margin</CardTitle>
              <CardDescription>Between 1st and 2nd place</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{(electionResults[0].percentage - electionResults[1].percentage).toFixed(1)}%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Presidential Election Results</CardTitle>
            <CardDescription>Vote distribution among candidates</CardDescription>
            <div className="flex items-center justify-end gap-2 mt-2">
              <Button variant="outline" size="sm" onClick={() => setViewType('chart')} className={viewType === 'chart' ? 'bg-muted' : ''}>
                Chart View
              </Button>
              <Button variant="outline" size="sm" onClick={() => setViewType('table')} className={viewType === 'table' ? 'bg-muted' : ''}>
                Table View
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {viewType === 'chart' ? (
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    >
                      {electionResults.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} votes`, 'Votes']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <Table>
                <TableCaption>Final tally of votes as of {new Date().toLocaleDateString()}</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Party</TableHead>
                    <TableHead className="text-right">Votes</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {electionResults.map((result) => (
                    <TableRow key={result.id}>
                      <TableCell className="font-medium">{result.candidateName}</TableCell>
                      <TableCell>{result.party}</TableCell>
                      <TableCell className="text-right">{result.votes.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{result.percentage}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share Results
            </Button>
          </CardFooter>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Voter Participation by Region</CardTitle>
              <CardDescription>Percentage of eligible voters who cast a ballot</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={participationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="participation" fill="#3b82f6" name="Participation %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Hourly Voting Activity</CardTitle>
              <CardDescription>Number of votes cast by hour</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={hourlyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="votes" fill="#6366f1" name="Votes Cast" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Blockchain Verification</CardTitle>
            <CardDescription>All votes are securely recorded and verifiable on the blockchain</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Election Smart Contract</h3>
              <p className="font-mono text-xs break-all">0x8c7d3a9c2e5b1f4d6a7c8b9d0e3f2a1b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Results Hash (IPFS)</h3>
              <p className="font-mono text-xs break-all">QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o</p>
            </div>
            <div className="flex justify-center mt-4">
              <Button>
                Verify On-Chain
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
