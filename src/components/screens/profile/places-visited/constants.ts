import type { Place } from './interface';

export const STATES_VISITED: Place[] = [
  {
    id: 1,
    name: "Rajasthan",
    description: "Royal palaces and desert landscapes",
    lastVisit: "March 2025",
    citiesVisited: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer", "Pushkar"],
    tripsCount: 3,
    isWishlist: false
  },
  {
    id: 2,
    name: "Kerala",
    description: "Backwaters and spice plantations",
    lastVisit: "December 2024",
    citiesVisited: ["Kochi", "Alleppey", "Munnar", "Varkala"],
    tripsCount: 2,
    isWishlist: false
  },
  {
    id: 3,
    name: "Goa",
    description: "Beaches and Portuguese heritage",
    lastVisit: "April 2023",
    citiesVisited: ["Panjim", "Candolim", "Palolem"],
    tripsCount: 1,
    isWishlist: false
  },
  {
    id: 4,
    name: "Himachal Pradesh",
    description: "Snow-capped mountains and adventure sports",
    lastVisit: "August 2024",
    citiesVisited: ["Shimla", "Manali", "Dharamshala", "Kasol"],
    tripsCount: 2,
    isWishlist: false
  },
  {
    id: 5,
    name: "Sikkim",
    description: "Buddhist monasteries and serene landscapes",
    lastVisit: "October 2023",
    citiesVisited: ["Gangtok", "Pelling", "Lachung"],
    tripsCount: 1,
    isWishlist: false
  }
];

export const STATES_WISHLIST: Place[] = [
  {
    id: 6,
    name: "Kashmir",
    description: "Paradise on earth with stunning valleys",
    isWishlist: true
  },
  {
    id: 7,
    name: "Ladakh",
    description: "High-altitude desert with Buddhist culture",
    isWishlist: true
  },
  {
    id: 8,
    name: "Andaman & Nicobar",
    description: "Pristine beaches and coral reefs",
    isWishlist: true
  },
  {
    id: 9,
    name: "Meghalaya",
    description: "Living root bridges and waterfalls",
    isWishlist: true
  }
];
