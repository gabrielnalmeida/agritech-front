export default function NavBar() {
  return (
    <>
      <div className="fixed w-full h-20 flex items-center justify-center border-b border-[#4BAF4F]">
        <div className="max-w-7xl flex justify-between items-center w-full">
          <div className="flex gap-2 items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />

            <h1 className="text-[#4BAF4F] font-bold">AgriTech</h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="#analysis" className="text-[#4BAF4F] hover:text-gray-700">
              analysis
            </a>
            <a href="#analysis" className="text-[#4BAF4F] hover:text-gray-700">
              news
            </a>
            <a href="#analysis" className="text-[#4BAF4F] hover:text-gray-700">
              about us
            </a>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </>
  )
}
