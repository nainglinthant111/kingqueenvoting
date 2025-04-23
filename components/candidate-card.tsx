"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

type Candidate = {
  id: string
  name: string
  department: string
  image: string
  votes: number
}

interface CandidateCardProps {
  candidate: Candidate
  type: "king" | "queen"
  hasVoted: boolean
  onVote: (candidateId: string, type: "king" | "queen") => void
}

export function CandidateCard({ candidate, type, hasVoted, onVote }: CandidateCardProps) {
  const [isVoting, setIsVoting] = useState(false)
  const [voted, setVoted] = useState(false)

  const handleVote = async () => {
    setIsVoting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    onVote(candidate.id, type)
    setVoted(true)
    setIsVoting(false)
  }

  const isDisabled = isVoting || hasVoted || voted

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={candidate.image || "/placeholder.svg"} alt={candidate.name} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-purple-600 text-white p-1 rounded-full">
          <Crown className="h-5 w-5" />
        </div>
      </div>
      <CardHeader>
        <CardTitle>{candidate.name}</CardTitle>
        <CardDescription>{candidate.department}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {type === "king" ? "King Candidate" : "Queen Candidate"}
          </span>
          <span className="text-sm font-medium">{candidate.votes} votes</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        {hasVoted && !voted && (
          <Alert variant="destructive" className="p-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">You can only vote for one {type} candidate</AlertDescription>
          </Alert>
        )}
        <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleVote} disabled={isDisabled}>
          {isVoting
            ? "Voting..."
            : voted
              ? "Voted"
              : hasVoted
                ? `Already voted for ${type}`
                : `Vote for ${type === "king" ? "King" : "Queen"}`}
        </Button>
      </CardFooter>
    </Card>
  )
}
