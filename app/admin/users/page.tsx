import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Pencil, Trash2 } from "lucide-react";

export default function UsersPage() {
    // Mock data for users
    const users = [
        {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            role: "admin",
            status: "active",
            voted: true,
        },
        {
            id: "2",
            name: "Jane Smith",
            email: "jane@example.com",
            role: "user",
            status: "active",
            voted: true,
        },
        {
            id: "3",
            name: "Bob Johnson",
            email: "bob@example.com",
            role: "user",
            status: "active",
            voted: false,
        },
        {
            id: "4",
            name: "Alice Williams",
            email: "alice@example.com",
            role: "user",
            status: "inactive",
            voted: false,
        },
        {
            id: "5",
            name: "Charlie Brown",
            email: "charlie@example.com",
            role: "user",
            status: "active",
            voted: true,
        },
        {
            id: "6",
            name: "Diana Prince",
            email: "diana@example.com",
            role: "user",
            status: "active",
            voted: false,
        },
        {
            id: "7",
            name: "Edward Norton",
            email: "edward@example.com",
            role: "user",
            status: "inactive",
            voted: false,
        },
        {
            id: "8",
            name: "Fiona Apple",
            email: "fiona@example.com",
            role: "user",
            status: "active",
            voted: true,
        },
    ];

    return (
        <div className="container py-8">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Users</h1>
                        <p className="text-muted-foreground">
                            Manage users and their voting permissions.
                        </p>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 mt-4 md:mt-0">
                        <UserPlus className="mr-2 h-4 w-4" /> Add User
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>All Users</CardTitle>
                        <CardDescription>
                            View and manage all registered users.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between mb-4">
                            <div className="relative w-64">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search users..."
                                    className="pl-8"
                                />
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                >
                                    Active
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                >
                                    Inactive
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                >
                                    All
                                </Button>
                            </div>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Voted</TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">
                                            {user.name}
                                        </TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    user.role === "admin"
                                                        ? "default"
                                                        : "outline"
                                                }
                                                className={
                                                    user.role === "admin"
                                                        ? "bg-purple-600"
                                                        : ""
                                                }
                                            >
                                                {user.role}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    user.status === "active"
                                                        ? "default"
                                                        : "secondary"
                                                }
                                                className={
                                                    user.status === "active"
                                                        ? "bg-green-500"
                                                        : ""
                                                }
                                            >
                                                {user.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {user.voted ? (
                                                <Badge className="bg-blue-500">
                                                    Voted
                                                </Badge>
                                            ) : (
                                                <Badge variant="outline">
                                                    Not voted
                                                </Badge>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                >
                                                    <Pencil className="h-4 w-4" />
                                                    <span className="sr-only">
                                                        Edit
                                                    </span>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-red-500 hover:text-red-600"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                    <span className="sr-only">
                                                        Delete
                                                    </span>
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
