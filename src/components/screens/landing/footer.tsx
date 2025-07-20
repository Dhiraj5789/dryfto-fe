
export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-green-500 p-10 text-white">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">Dryfto</h3>
        <p className="text-normal w-1/2">Discover hidden gems and unexplored locations around the world. Create unforgettable memories with our curated travel experiences.</p>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Explore</h4>
        <p className="text-normal cursor-pointer hover:text-gray-100">Destinations</p>
        <p className="text-normal cursor-pointer hover:text-gray-100">Categories</p>
        <p className="text-normal cursor-pointer hover:text-gray-100">Itineraries</p>
        <p className="text-normal cursor-pointer hover:text-gray-100">Wishlists</p>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Company</h4>
        <p className="text-normal cursor-pointer hover:text-gray-100">About Us</p>
        <p className="text-normal cursor-pointer hover:text-gray-100">Contact Us</p>
        <p className="text-normal cursor-pointer hover:text-gray-100">Privacy Policy</p>
        <p className="text-normal cursor-pointer hover:text-gray-100">Terms of Service</p>
      </div>
    </footer>
  );
} 