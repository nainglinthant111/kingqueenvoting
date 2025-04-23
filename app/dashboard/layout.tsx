import type React from "react"
import { UserNav } from "@/components/user-nav"
import { MainNav } from "@/components/main-nav"
import { Crown } from "lucide-react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="flex items-center gap-2">
              <Crown className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">Royal Vote</span>
            </Link>
            <MainNav />
          </div>
          <UserNav />
        </div>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  )
}
