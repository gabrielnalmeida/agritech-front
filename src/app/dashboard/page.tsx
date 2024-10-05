import { DatePickerDemo } from '@/components/dayPicker'
import {
  ThermometerSun,
  CloudDrizzle,
  MapPin,
  Calendar,
  Wind,
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col py-16 items-center">
      <div className="flex max-w-7xl w-full gap-6 flex-col">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-3xl"> Land 1</h1>
          <DatePickerDemo />
        </div>
        <div className=" flex w-full h-[700px]  gap-6">
          <div className="w-1/4 h-full bg-white shadow-lg rounded-xl"></div>
          <div className="flex-1 flex-col flex gap-6 ">
            <div className="flex h-1/3 w-full gap-6 ">
              <div className="h-full w-1/4 flex-col bg-white shadow-lg rounded-xl p-4 gap-3 flex ">
                <div className=" w-full flex items-center gap-4">
                  <ThermometerSun className="size-14" />{' '}
                  <div className="text-4xl font-bold">28°</div>
                </div>
                <div className="flex w-full  items-center gap-2">
                  <CloudDrizzle className="size-6" />{' '}
                  <div className="text-lg">Rainy clouds</div>
                </div>
                <div className="h-px w-full bg-black" />
                <div className="flex items-start gap-2">
                  <MapPin className="size-6" />{' '}
                  <div className="text-lg">Florida, MI</div>
                </div>
                <div className="flex gap-2">
                  <Calendar className="size-6" />{' '}
                  <div className="text-lg">5 Octorber 2024</div>
                </div>
              </div>
              <div className="h-full w-3/4 bg-white shadow-lg rounded-xl"></div>
            </div>
            <div className="flex h-1/3 w-full gap-6 ">
              <div className="h-full w-3/4 bg-white shadow-lg rounded-xl"></div>
              <div className="h-full w-1/4 flex-col bg-white shadow-lg rounded-xl p-4 gap-3 flex ">
                <div className=" w-full flex items-center gap-4">
                  <Wind className="size-14" />{' '}
                  <div className="text-4xl font-bold">
                    13
                    <span className="text-lg">km/h</span>
                  </div>
                </div>
                <div className="flex w-full  items-center gap-2">
                  <div className="text-lg">Vento fresco</div>
                </div>
                <div className="h-px w-full bg-black" />
                <div className=" w-full flex items-center gap-4">
                  <div className="text-2xl font-bold">Luminosity</div>
                </div>
                <div className="flex w-full  items-center gap-2">
                  <div className="text-lg">80 lumens</div>
                </div>
              </div>
            </div>
            <div className="h-1/3 w-full bg-white shadow-lg rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
