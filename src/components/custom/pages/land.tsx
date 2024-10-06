import { Droplet, LandPlot, Sun, Wind } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

interface LandComponentProps {
  LandId: number
  LandName: string
}

export function LandComponent({ LandId, LandName }: LandComponentProps) {
  return (
    <>
      <div className="flex w-full justify-between py-3 border-black p-6">
        <div className="flex gap-2 items-center">
          <LandPlot className="size-10" />
          <span>{LandName}</span>
        </div>

        <div className="flex gap-12 items-center">
          <div className="flex gap-2 items-center">
            <Droplet className="size-4" />
            <span className="text-xs">83%</span>
          </div>
          <div className="flex gap-2 items-center">
            <Sun className="size-4" />
            <span className="text-xs">80 Lumens</span>
          </div>
          <div className="flex gap-2 items-center">
            <Wind className="size-4" />
            <span className="text-xs">13Km/h</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs">Last Update: 40min ago</span>
          <Link href={`/dashboard/${LandId}`}>
            <Button variant="outline">Details</Button>
          </Link>
        </div>
      </div>
      <Separator className="bg-muted-foreground" />
    </>
  )
}
