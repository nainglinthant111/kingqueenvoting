import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AvatarFallback } from "@/components/ui/avatar";
import { Avatar } from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, Users, VoteIcon, Award } from "lucide-react";
import { VotingChart } from "@/components/voting-chart";

export default function AdminDashboardPage() {
    return (
        <div className="container py-8">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-muted-foreground">
                        Manage the voting process and view real-time results.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Votes
                            </CardTitle>
                            <VoteIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,234</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last hour
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Registered Users
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">573</div>
                            <p className="text-xs text-muted-foreground">
                                +12 new users today
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                King Candidates
                            </CardTitle>
                            <Crown className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">8</div>
                            <p className="text-xs text-muted-foreground">
                                3 added this week
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Queen Candidates
                            </CardTitle>
                            <Award className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">9</div>
                            <p className="text-xs text-muted-foreground">
                                2 added this week
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Tabs
                    defaultValue="king"
                    className="w-full"
                >
                    <TabsList className="grid w-full max-w-md grid-cols-2">
                        <TabsTrigger value="king">
                            King Voting Stats
                        </TabsTrigger>
                        <TabsTrigger value="queen">
                            Queen Voting Stats
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent
                        value="king"
                        className="mt-6"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>King Candidate Votes</CardTitle>
                                <CardDescription>
                                    Real-time voting statistics for king
                                    candidates.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <VotingChart
                                    data={[
                                        { name: "James Wilson", votes: 120 },
                                        { name: "Michael Brown", votes: 95 },
                                        { name: "Robert Johnson", votes: 87 },
                                        { name: "David Smith", votes: 64 },
                                        { name: "John Williams", votes: 52 },
                                    ]}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent
                        value="queen"
                        className="mt-6"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Queen Candidate Votes</CardTitle>
                                <CardDescription>
                                    Real-time voting statistics for queen
                                    candidates.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <VotingChart
                                    data={[
                                        { name: "Emily Davis", votes: 145 },
                                        { name: "Sophia Martinez", votes: 132 },
                                        { name: "Olivia Taylor", votes: 118 },
                                        { name: "Emma Anderson", votes: 89 },
                                        { name: "Ava Thomas", votes: 76 },
                                    ]}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                            <CardDescription>
                                Latest voting and registration activity.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4"
                                    >
                                        <Avatar className="h-9 w-9">
                                            <AvatarFallback>
                                                {String.fromCharCode(64 + i)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                User {100 + i}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {i % 2 === 0
                                                    ? "Voted for a king candidate"
                                                    : "Voted for a queen candidate"}
                                            </p>
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {i * 5} min ago
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Voting Status</CardTitle>
                            <CardDescription>
                                Current voting period and settings.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <p className="text-sm font-medium">
                                            Voting Period
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            April 15 - April 30, 2025
                                        </p>
                                    </div>
                                    <Badge className="bg-green-500">
                                        Active
                                    </Badge>
                                </div>
                                <Separator />
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium">
                                            Allow Multiple Votes
                                        </p>
                                        <Switch checked={false} />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium">
                                            Show Results Publicly
                                        </p>
                                        <Switch checked={true} />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium">
                                            Allow New Candidates
                                        </p>
                                        <Switch checked={false} />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
