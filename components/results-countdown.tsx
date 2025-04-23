"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface ResultsCountdownProps {
  endDate: Date
  onToggleResults?: () => void
}

export function ResultsCountdown({ endDate, onToggleResults }: ResultsCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +endDate - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-purple-600" />
          Results Countdown
        </CardTitle>
        <CardDescription>Time remaining until voting ends and results are revealed</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="flex flex-col">
            <div className="text-3xl font-bold">{formatTime(timeLeft.days)}</div>
            <div className="text-sm text-muted-foreground">Days</div>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold">{formatTime(timeLeft.hours)}</div>
            <div className="text-sm text-muted-foreground">Hours</div>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold">{formatTime(timeLeft.minutes)}</div>
            <div className="text-sm text-muted-foreground">Minutes</div>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold">{formatTime(timeLeft.seconds)}</div>
            <div className="text-sm text-muted-foreground">Seconds</div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Voting ends on {endDate.toLocaleDateString()} at {endDate.toLocaleTimeString()}
          </p>
        </div>

        {/* For demo purposes only - allows toggling results */}
        {onToggleResults && (
          <div className="mt-6 flex justify-center">
            <Button variant="outline" onClick={onToggleResults} className="text-xs">
              Demo: Show Results
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
