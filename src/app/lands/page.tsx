import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { LandComponent } from '@/components/custom/pages/land'
import { mockedLand } from './_landMock'
export default function MyLandPage() {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col py-16 items-center">
      <div className="flex max-w-7xl w-full gap-6 flex-col">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-3xl">My Lands</h1>
          <Button className="gap-2">
            <Plus className="size-5" />
            Register new land
          </Button>
        </div>

        {mockedLand.map((land) => (
          <LandComponent
            key={land.id}
            LandId={land.id}
            LandName={land.LandName}
          />
        ))}
      </div>
    </div>
  )
}
