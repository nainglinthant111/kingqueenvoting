import { Badge } from "@/components/ui/badge"

export function StatusBadge({ status }: { status: string }) {
  if (status === "active") {
    return <Badge className="bg-green-500">Active</Badge>
  } else if (status === "pending") {
    return <Badge variant="secondary">Pending</Badge>
  } else {
    return <Badge variant="outline">Inactive</Badge>
  }
}
