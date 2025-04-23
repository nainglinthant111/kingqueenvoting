"use client";

import type React from "react";
import { UserNav } from "@/components/user-nav";
import { Crown, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
];
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <Sheet key="left">
            <div className="flex min-h-screen flex-col">
                <header className="sticky top-0 z-50 w-full border-b bg-background">
                    <div className="container flex h-16 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <SheetTrigger
                                asChild
                                className="md:hidden -ml-4"
                            >
                                <Button
                                    className="border-0 after:bg-0 clicked:bg-0"
                                    variant="outline"
                                    size="icon"
                                >
                                    <MenuIcon className=" h-6 w-6 text-purple-600" />
                                </Button>
                            </SheetTrigger>
                            <Link
                                href="/admin/dashboard"
                                className="flex items-center gap-2"
                            >
                                <Crown className="hidden md:block h-6 w-6 text-purple-600" />
                                <span className="text-xl font-bold">
                                    Royal Vote Admin
                                </span>
                            </Link>
                            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 ml-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-primary",
                                            pathname === item.href
                                                ? "text-purple-600"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <UserNav />
                    </div>
                </header>
                <div className="flex-1">{children}</div>
            </div>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Royal Vote Admin</SheetTitle>
                </SheetHeader>

                <Separator className="my-4" />
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <nav className="md:hidden flex flex-col  ml-6">
                            {navItems.map((item) => (
                                <SheetClose
                                    key={item.href}
                                    asChild
                                >
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary",
                                            pathname === item.href
                                                ? "text-purple-600"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </SheetClose>
                            ))}
                        </nav>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
