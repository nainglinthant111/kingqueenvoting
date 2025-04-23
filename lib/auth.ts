// This is a mock authentication service
// In a real application, you would use a proper authentication system

type User = {
  id: string
  name: string
  email: string
  role: "user" | "admin"
}

// Mock user database
const users: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
  },
  {
    id: "2",
    name: "Test User",
    email: "user@example.com",
    role: "user",
  },
]

export async function login(email: string, password: string): Promise<User> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const user = users.find((u) => u.email === email)

  if (!user) {
    throw new Error("Invalid credentials")
  }

  // In a real app, you would verify the password here

  return user
}

export async function register(name: string, email: string, password: string): Promise<User> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Check if user already exists
  if (users.some((u) => u.email === email)) {
    throw new Error("User already exists")
  }

  // Create new user
  const newUser: User = {
    id: String(users.length + 1),
    name,
    email,
    role: "user",
  }

  // In a real app, you would hash the password and store the user in a database
  users.push(newUser)

  return newUser
}

export async function getCurrentUser(): Promise<User | null> {
  // In a real app, you would verify the session/token and return the current user
  // This is just a mock implementation
  return null
}

export async function logout(): Promise<void> {
  // In a real app, you would invalidate the session/token
  await new Promise((resolve) => setTimeout(resolve, 500))
}
