import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Your Profile</h1>
          <p className="text-muted-foreground">View and manage your personal information and voting status.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>Update your profile picture.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="User" />
                <AvatarFallback className="text-4xl">U</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Change Picture
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" defaultValue="Computer Science" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="student-id">Student ID</Label>
                <Input id="student-id" defaultValue="CS12345" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive voting updates via email</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="notifications" className="sr-only">
                    Email Notifications
                  </Label>
                  <input
                    type="checkbox"
                    id="notifications"
                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    defaultChecked
                  />
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Change Password</p>
                  <p className="text-sm text-muted-foreground">Update your password regularly</p>
                </div>
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Voting Status</CardTitle>
              <CardDescription>Your current voting status for the election.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center dark:bg-purple-900">
                    <span className="font-semibold text-purple-600 dark:text-purple-300">K</span>
                  </div>
                  <div>
                    <p className="font-medium">King Candidate</p>
                    <p className="text-sm text-muted-foreground">James Wilson</p>
                  </div>
                </div>
                <Badge className="bg-green-500">Voted</Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center dark:bg-purple-900">
                    <span className="font-semibold text-purple-600 dark:text-purple-300">Q</span>
                  </div>
                  <div>
                    <p className="font-medium">Queen Candidate</p>
                    <p className="text-sm text-muted-foreground">Emily Davis</p>
                  </div>
                </div>
                <Badge className="bg-green-500">Voted</Badge>
              </div>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  You have cast your votes for both King and Queen candidates. You can change your votes until the
                  voting period ends.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
