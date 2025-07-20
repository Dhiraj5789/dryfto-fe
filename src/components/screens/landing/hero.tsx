'use client'

import Button from "@/components/common/button";

export default function Hero() {
  return (
    <header className="flex flex-col items-center justify-center h-screen text-center" style={{
      backgroundImage: "url('/images/urban-vintage-78A265wPiO4-unsplash.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h1 className="flex flex-col items-center justify-center text-6xl font-extrabold">
        <span className="text-white">Discover Hidden</span>
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Gems Near You</span>
      </h1>
      <h2 className="text-xl sm:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
        Explore unexplored locations, create unforgettable memories, and find your next adventure
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 w-[672px] mx-auto">
        <input 
          placeholder="🔍  Search for hidden gems..." 
          className="bg-gray-200 font-normal rounded-2xl px-3 w-full h-full" 
        />
        <Button 
          variant="base" 
          className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 py-6 px-8 rounded-2xl" 
          onClick={() => {
            console.log("Get Started");
          }}
        >
          Explore
        </Button>
      </div>
    </header>
  );
} 