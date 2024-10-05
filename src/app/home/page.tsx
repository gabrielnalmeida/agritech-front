const AgritechPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <header className="w-full border-b border-[#4BAF4F] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 mr-2 ml-4 sm:ml-8 lg:ml-28" />
            <h1 className="text-[#4BAF4F] font-bold">AgriTech</h1>
          </div>
          <nav>
            <ul className="flex space-x-4 mr-4 sm:mr-8 lg:mr-28">
              <li><a href="#analysis" className="text-[#4BAF4F] hover:text-gray-700">analysis</a></li>
              <li><a href="#news" className="text-[#4BAF4F] hover:text-gray-700">news</a></li>
              <li><a href="#about-us" className="text-[#4BAF4F] hover:text-gray-700">about us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="w-full max-w-[1024px] h-full flex-grow flex justify-center items-center mt-16">
        <main className="w-full p-4">
        </main>
      </div>
    </div>
  );
};

export default AgritechPage;