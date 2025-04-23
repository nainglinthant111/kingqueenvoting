"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Crown, AlertCircle, Trophy } from "lucide-react"
import { VotingChart } from "@/components/voting-chart"
import { ResultsCountdown } from "@/components/results-countdown"

export default function ResultsPage() {
  // Mock data for candidates
  const kingCandidates = [
    {
      name: "James Wilson",
      votes: 120,
      department: "Computer Science",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Brown",
      votes: 95,
      department: "Business Administration",
      image: "/placeholder.svg?height=300&width=300",
    },
    { name: "Robert Johnson", votes: 87, department: "Engineering", image: "/placeholder.svg?height=300&width=300" },
    { name: "David Smith", votes: 64, department: "Physics", image: "/placeholder.svg?height=300&width=300" },
    { name: "John Williams", votes: 52, department: "Mathematics", image: "/placeholder.svg?height=300&width=300" },
  ]

  const queenCandidates = [
    { name: "Emily Davis", votes: 145, department: "Psychology", image: "/placeholder.svg?height=300&width=300" },
    { name: "Sophia Martinez", votes: 132, department: "Fine Arts", image: "/placeholder.svg?height=300&width=300" },
    { name: "Olivia Taylor", votes: 118, department: "Medicine", image: "/placeholder.svg?height=300&width=300" },
    { name: "Emma Anderson", votes: 89, department: "Literature", image: "/placeholder.svg?height=300&width=300" },
    { name: "Ava Thomas", votes: 76, department: "Chemistry", image: "/placeholder.svg?height=300&width=300" },
  ]

  // Set voting end date (for example, 7 days from now)
  const [votingEnded, setVotingEnded] = useState(false)

  // For demo purposes, we'll use a state to toggle between countdown and results
  const [showResults, setShowResults] = useState(false)

  // Set the end date to 3 days from now for demonstration
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 3)

  useEffect(() => {
    // Check if current time is past the end date
    const checkTime = () => {
      const now = new Date()
      if (now >= endDate) {
        setVotingEnded(true)
        setShowResults(true)
      }
    }

    // Check immediately
    checkTime()

    // Set up interval to check every minute
    const interval = setInterval(checkTime, 60000)

    // Clean up interval
    return () => clearInterval(interval)
  }, [])

  // For demo purposes, allow toggling results
  const toggleResults = () => {
    setShowResults(!showResults)
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Election Results</h1>
          <p className="text-muted-foreground">
            {showResults
              ? "View the final results of the King and Queen election."
              : "Results will be available when the voting period ends."}
          </p>
        </div>

        {!showResults ? (
          <div className="space-y-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Voting in progress</AlertTitle>
              <AlertDescription>
                Results will be revealed when the voting period ends. You can still cast or change your votes until
                then.
              </AlertDescription>
            </Alert>

            <ResultsCountdown endDate={endDate} onToggleResults={toggleResults} />
          </div>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 text-white">
                  <div className="flex items-center gap-2">
                    <Crown className="h-6 w-6" />
                    <h2 className="text-2xl font-bold">King Winner</h2>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-purple-500">
                      <img
                        src={kingCandidates[0].image || "/placeholder.svg"}
                        alt={kingCandidates[0].name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{kingCandidates[0].name}</h3>
                      <p className="text-muted-foreground">{kingCandidates[0].department}</p>
                      <div className="mt-1 flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        <span className="font-medium">{kingCandidates[0].votes} votes</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-pink-700 p-6 text-white">
                  <div className="flex items-center gap-2">
                    <Crown className="h-6 w-6" />
                    <h2 className="text-2xl font-bold">Queen Winner</h2>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-pink-500">
                      <img
                        src={queenCandidates[0].image || "/placeholder.svg"}
                        alt={queenCandidates[0].name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{queenCandidates[0].name}</h3>
                      <p className="text-muted-foreground">{queenCandidates[0].department}</p>
                      <div className="mt-1 flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        <span className="font-medium">{queenCandidates[0].votes} votes</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="king" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="king">King Results</TabsTrigger>
                <TabsTrigger value="queen">Queen Results</TabsTrigger>
              </TabsList>
              <TabsContent value="king" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>King Candidate Results</CardTitle>
                    <CardDescription>Final voting results for king candidates.</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <VotingChart data={kingCandidates} />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="queen" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Queen Candidate Results</CardTitle>
                    <CardDescription>Final voting results for queen candidates.</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <VotingChart data={queenCandidates} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  )
}
