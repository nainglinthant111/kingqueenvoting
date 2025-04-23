import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserAvatar({ name, image }: { name: string; image?: string }) {
  return (
    <Avatar>
      <AvatarImage src={image || "/placeholder.svg?height=32&width=32"} alt={name} />
      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
    </Avatar>
  )
}
