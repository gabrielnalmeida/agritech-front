import { DatePickerDemo } from '@/components/dayPicker'

export default function Dashboard() {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col py-16 items-center">
      <div className="flex max-w-7xl w-full gap-6 flex-col">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-3xl"> Land 1</h1>
          <DatePickerDemo />
        </div>
        <div className=" flex w-full h-[700px] bg-blue-100 gap-6">
          <div className="w-1/4 h-full bg-red-200"></div>
          <div className="flex-1 flex-col flex gap-6 bg-green-200">
            <div className="flex h-1/3 w-full gap-6 bg-pink-200">
              <div className="h-full w-1/3  bg-orange-200"></div>
              <div className="h-full w-2/3 bg-orange-200"></div>
            </div>
            <div className="flex h-1/3 w-full gap-6 bg-pink-200">
              <div className="h-full w-1/2  bg-orange-200"></div>
              <div className="h-full w-1/2 bg-orange-200"></div>
            </div>
            <div className="h-1/3 w-full bg-orange-200"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
