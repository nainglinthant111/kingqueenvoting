"use client"

import { useState } from "react"
import { CandidateCard } from "@/components/candidate-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function DashboardPage() {
  // State to track votes
  const [kingVote, setKingVote] = useState<string | null>(null)
  const [queenVote, setQueenVote] = useState<string | null>(null)

  // Mock data for candidates
  const kingCandidates = [
    {
      id: "1",
      name: "James Wilson",
      department: "Computer Science",
      image: "/placeholder.svg?height=300&width=300",
      votes: 120,
    },
    {
      id: "2",
      name: "Michael Brown",
      department: "Business Administration",
      image: "/placeholder.svg?height=300&width=300",
      votes: 95,
    },
    {
      id: "3",
      name: "Robert Johnson",
      department: "Engineering",
      image: "/placeholder.svg?height=300&width=300",
      votes: 87,
    },
  ]

  const queenCandidates = [
    {
      id: "4",
      name: "Emily Davis",
      department: "Psychology",
      image: "/placeholder.svg?height=300&width=300",
      votes: 145,
    },
    {
      id: "5",
      name: "Sophia Martinez",
      department: "Fine Arts",
      image: "/placeholder.svg?height=300&width=300",
      votes: 132,
    },
    {
      id: "6",
      name: "Olivia Taylor",
      department: "Medicine",
      image: "/placeholder.svg?height=300&width=300",
      votes: 118,
    },
  ]

  // Handle voting
  const handleVote = (candidateId: string, type: "king" | "queen") => {
    if (type === "king") {
      setKingVote(candidateId)
    } else {
      setQueenVote(candidateId)
    }
  }

  // Get candidate name by ID
  const getKingCandidateName = () => {
    if (!kingVote) return null
    const candidate = kingCandidates.find((c) => c.id === kingVote)
    return candidate ? candidate.name : null
  }

  const getQueenCandidateName = () => {
    if (!queenVote) return null
    const candidate = queenCandidates.find((c) => c.id === queenVote)
    return candidate ? candidate.name : null
  }

  // Reset votes
  const resetKingVote = () => setKingVote(null)
  const resetQueenVote = () => setQueenVote(null)

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Vote for Campus Royalty</h1>
          <p className="text-muted-foreground">
            Cast your vote for this year's King and Queen. You can vote for one candidate in each category.
          </p>
        </div>

        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Voting Rules</AlertTitle>
          <AlertDescription>
            You can vote for exactly one King candidate and one Queen candidate. You can change your vote until the
            voting period ends.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="king" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="king">King Candidates</TabsTrigger>
            <TabsTrigger value="queen">Queen Candidates</TabsTrigger>
          </TabsList>
          <TabsContent value="king" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {kingCandidates.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  type="king"
                  hasVoted={kingVote !== null}
                  onVote={handleVote}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="queen" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {queenCandidates.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  type="queen"
                  hasVoted={queenVote !== null}
                  onVote={handleVote}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Your Votes</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center dark:bg-purple-900">
                  <span className="font-semibold text-purple-600 dark:text-purple-300">K</span>
                </div>
                <div>
                  <p className="font-medium">King Candidate</p>
                  <p className="text-sm text-muted-foreground">{getKingCandidateName() || "Not voted yet"}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={resetKingVote} disabled={!kingVote}>
                {kingVote ? "Change" : "Vote"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center dark:bg-purple-900">
                  <span className="font-semibold text-purple-600 dark:text-purple-300">Q</span>
                </div>
                <div>
                  <p className="font-medium">Queen Candidate</p>
                  <p className="text-sm text-muted-foreground">{getQueenCandidateName() || "Not voted yet"}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={resetQueenVote} disabled={!queenVote}>
                {queenVote ? "Change" : "Vote"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
