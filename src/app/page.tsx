import Navigation from "@/components/landing/navigation";
import Hero from "@/components/landing/hero";
import Footer from "@/components/landing/footer";
import ExploreByCategory from "@/components/landing/sections/explore-by-category";
import PopularItenaries from "@/components/landing/sections/popular-itenaries";
import TravelInfluencerSpotlight from "@/components/landing/sections/travel-influencer-spotlight";

export default function Home() {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <main>
        <ExploreByCategory />
        <PopularItenaries />
        <TravelInfluencerSpotlight />
        <div className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-4xl font-bold">Never Miss a Hidden Gem</h2>
          <p className="text-xl font-normal m-5 w-1/2 text-center">Get weekly updates on newly discovered locations, exclusive itineraries, and travel tips from our community</p>
          <div className="flex items-center justify-center gap-5">
            <input type="email" placeholder="Enter your email" className="w-[350px] p-2 rounded-md border-gray-100 border-1" />
            <button className="bg-white text-orange-500 px-8 py-2 rounded-md font-semibold cursor-pointer">Subscribe</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
