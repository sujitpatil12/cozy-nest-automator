
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button-shadcn';
import { CalendarDays, Users, ArrowRight } from 'lucide-react';

const ElectionList = () => {
  // Mock election data
  const elections = [
    {
      id: 1,
      title: "General Election 2023",
      description: "Presidential and House of Representatives election",
      startDate: "2023-11-05",
      endDate: "2023-11-05",
      status: "active",
      candidates: 5,
      voterCount: 10254
    },
    {
      id: 2,
      title: "Local City Council",
      description: "Election for city council representatives",
      startDate: "2023-11-10",
      endDate: "2023-11-12",
      status: "upcoming",
      candidates: 12,
      voterCount: 4521
    },
    {
      id: 3,
      title: "University Student Body",
      description: "Student government leadership election",
      startDate: "2023-10-15",
      endDate: "2023-10-16",
      status: "ended",
      candidates: 8,
      voterCount: 2187
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      active: "bg-green-100 text-green-800",
      upcoming: "bg-blue-100 text-blue-800",
      ended: "bg-gray-100 text-gray-800"
    };
    const statusText = status.charAt(0).toUpperCase() + status.slice(1);
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status as keyof typeof statusClasses]}`}>
        {statusText}
      </span>
    );
  };

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Active Elections</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Participate in ongoing elections or view upcoming ballots
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {elections.map(election => (
            <Card key={election.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-xl">{election.title}</CardTitle>
                  {getStatusBadge(election.status)}
                </div>
                <CardDescription>{election.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {new Date(election.startDate).toLocaleDateString()} - {new Date(election.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{election.candidates} candidates · {election.voterCount.toLocaleString()} voters</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant={election.status === "active" ? "default" : "outline"} className="w-full" asChild>
                  <Link to={`/vote/${election.id}`}>
                    {election.status === "active" ? "Vote Now" : election.status === "upcoming" ? "View Details" : "View Results"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectionList;
