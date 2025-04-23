"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function AdminNav() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      name: "Candidates",
      href: "/admin/candidates",
    },
    {
      name: "Users",
      href: "/admin/users",
    },
    {
      name: "Settings",
      href: "/admin/settings",
    },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 ml-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-purple-600" : "text-muted-foreground",
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
