import { Switch } from "@/components/ui/switch"

export function ToggleSwitch({
  checked,
  onCheckedChange,
}: {
  checked: boolean
  onCheckedChange?: (checked: boolean) => void
}) {
  return <Switch checked={checked} onCheckedChange={onCheckedChange} />
}
