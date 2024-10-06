import { ModeToggle } from '@/components/ui/toggle-theme'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <>
      <div className="fixed bg-background w-full h-20 flex items-center justify-center border-b border-primary text-primary">
        <div className="max-w-7xl flex justify-between items-center w-full">
          <Link href="/home">
            <div className="flex gap-2 items-center ">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <h1 className="font-semibold text-lg">AgriTech</h1>
            </div>
          </Link>
          <div className="flex items-center gap-4 ">
            <Link href="/lands" className="hover:font-semibold">
              lands
            </Link>
            <Link href="/news" className="hover:font-semibold">
              news
            </Link>
            <Link href="/about-us" className=" hover:font-semibold">
              about us
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </>
  )
}
