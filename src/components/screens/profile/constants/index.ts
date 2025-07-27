export const PROFILE_DATA = {
  name: "Sarah Beach Explorer",
  username: "sarahbeaches", 
  bio: "Travel creator sharing hidden gems and authentic experiences around the world. Passionate about sustainable tourism and connecting with local cultures. 🌍✈️",
  location: "Bali, Indonesia",
  joinDate: "March 2023",
  profileImage: "/images/profile.avif"
};

export const PLACES_DATA = [
  {
    id: 1,
    name: "Tanah Lot Temple",
    location: "Tabanan, Bali",
    image: "/images/keegan-houser--Q_t4SCN8c4-unsplash.jpg",
    tags: ["Temple", "Sunset", "Cultural"]
  },
  {
    id: 2,
    name: "Uluwatu Cliff",
    location: "Pecatu, Bali", 
    image: "/images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg",
    tags: ["Ocean", "Cliff", "Photography"]
  }
];

export const ITINERARIES_DATA = [
  {
    id: 1,
    name: "Bali Adventure Tour",
    duration: "7 days",
    price: "$25",
    status: "paid",
    image: "/images/sardar-kamran-khan-zo_udYMcaVc-unsplash.jpg"
  },
  {
    id: 2,
    name: "Cultural Heritage Journey", 
    duration: "5 days",
    price: "$35",
    status: "paid",
    image: "/images/urban-vintage-78A265wPiO4-unsplash.jpg"
  }
];

export const CONTINENTS_DATA = [
  {
    name: "North America",
    color: "fill-blue-500",
    path: "M60 40 L120 20 L140 60 L120 100 L60 110 L30 80 Z"
  },
  {
    name: "Europe", 
    color: "fill-purple-500",
    path: "M200 40 L240 20 L260 50 L230 80 L210 60 Z"
  },
  {
    name: "Asia",
    color: "fill-yellow-500", 
    path: "M270 30 L320 10 L350 50 L300 100 L280 70 Z"
  },
  {
    name: "South America",
    color: "fill-green-500",
    path: "M140 130 L160 180 L130 200 L100 170 L110 140 Z"
  },
  {
    name: "Africa",
    color: "fill-red-500",
    path: "M220 90 L250 140 L230 170 L190 150 L180 110 Z"
  },
  {
    name: "Australia",
    color: "fill-indigo-500",
    path: "M330 130 L350 160 L320 180 L300 150 Z"
  }
];

export const TRAVEL_STATS = [
  {
    icon: 'airplane',
    label: 'Trips Taken',
    value: '248',
    color: 'text-blue-500'
  },
  {
    icon: 'map-pin',
    label: 'Places Visited',
    value: '156',
    color: 'text-green-500'
  },
  {
    icon: 'star',
    label: 'Reviews Posted',
    value: '324',
    color: 'text-purple-500'
  },
  {
    icon: 'users',
    label: 'Connections',
    value: '187',
    color: 'text-red-500'
  }
];

// Re-export form data constants
export * from './form-data'; 