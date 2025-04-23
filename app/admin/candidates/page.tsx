import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Pencil, Trash2 } from "lucide-react"

export default function CandidatesPage() {
  // Mock data for candidates
  const kingCandidates = [
    {
      id: "1",
      name: "James Wilson",
      department: "Computer Science",
      votes: 120,
      status: "active",
    },
    {
      id: "2",
      name: "Michael Brown",
      department: "Business Administration",
      votes: 95,
      status: "active",
    },
    {
      id: "3",
      name: "Robert Johnson",
      department: "Engineering",
      votes: 87,
      status: "active",
    },
    {
      id: "4",
      name: "David Smith",
      department: "Physics",
      votes: 64,
      status: "pending",
    },
    {
      id: "5",
      name: "John Williams",
      department: "Mathematics",
      votes: 52,
      status: "active",
    },
  ]

  const queenCandidates = [
    {
      id: "6",
      name: "Emily Davis",
      department: "Psychology",
      votes: 145,
      status: "active",
    },
    {
      id: "7",
      name: "Sophia Martinez",
      department: "Fine Arts",
      votes: 132,
      status: "active",
    },
    {
      id: "8",
      name: "Olivia Taylor",
      department: "Medicine",
      votes: 118,
      status: "active",
    },
    {
      id: "9",
      name: "Emma Anderson",
      department: "Literature",
      votes: 89,
      status: "pending",
    },
    {
      id: "10",
      name: "Ava Thomas",
      department: "Chemistry",
      votes: 76,
      status: "active",
    },
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Candidates</h1>
            <p className="text-muted-foreground">Manage king and queen candidates for the voting event.</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Candidate
          </Button>
        </div>

        <Tabs defaultValue="king" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="king">King Candidates</TabsTrigger>
            <TabsTrigger value="queen">Queen Candidates</TabsTrigger>
          </TabsList>
          <TabsContent value="king" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>King Candidates</CardTitle>
                <CardDescription>View and manage all king candidates.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Votes</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {kingCandidates.map((candidate) => (
                      <TableRow key={candidate.id}>
                        <TableCell className="font-medium">{candidate.name}</TableCell>
                        <TableCell>{candidate.department}</TableCell>
                        <TableCell>{candidate.votes}</TableCell>
                        <TableCell>
                          <Badge
                            variant={candidate.status === "active" ? "default" : "secondary"}
                            className={candidate.status === "active" ? "bg-green-500" : ""}
                          >
                            {candidate.status === "active" ? "Active" : "Pending"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="queen" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Queen Candidates</CardTitle>
                <CardDescription>View and manage all queen candidates.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Votes</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {queenCandidates.map((candidate) => (
                      <TableRow key={candidate.id}>
                        <TableCell className="font-medium">{candidate.name}</TableCell>
                        <TableCell>{candidate.department}</TableCell>
                        <TableCell>{candidate.votes}</TableCell>
                        <TableCell>
                          <Badge
                            variant={candidate.status === "active" ? "default" : "secondary"}
                            className={candidate.status === "active" ? "bg-green-500" : ""}
                          >
                            {candidate.status === "active" ? "Active" : "Pending"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
