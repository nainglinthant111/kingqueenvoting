import { RegisterForm } from "@/components/register-form"
import { Crown } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container flex flex-col items-center justify-center min-h-screen py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Crown className="h-6 w-6 text-purple-600" />
          <span className="text-xl font-bold">Royal Vote</span>
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your information to create an account</p>
          </div>
          <RegisterForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="underline underline-offset-4 hover:text-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
