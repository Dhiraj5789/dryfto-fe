// Place details data for the main place
export const PLACE_DETAILS_DATA = [
  {
    id: '1',
    name: 'Rajasthan',
    description: 'A land of kings, palaces, and vibrant culture.',
    lastVisit: 'March 2025'
  },
  {
    id: '2', 
    name: 'Kerala',
    description: 'Backwaters and spice plantations of God\'s Own Country.',
    lastVisit: 'December 2024'
  },
  {
    id: '3',
    name: 'Goa',
    description: 'Beaches and Portuguese heritage.',
    lastVisit: 'April 2023'
  }
];

// Places visited within the main place (for the Places Visited tab)
export const PLACES_VISITED_DETAIL = [
  {
    id: '1',
    name: 'Jaipur - The Pink City',
    location: 'Jaipur, Rajasthan',
    tags: ['city', 'historical', 'culture'],
    image: '/images/keegan-houser--Q_t4SCN8c4-unsplash.jpg',
    parentPlace: '1'
  },
  {
    id: '2',
    name: 'Jodhpur - The Blue City', 
    location: 'Jodhpur, Rajasthan',
    tags: ['city', 'historical', 'fort'],
    image: '/images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg',
    parentPlace: '1'
  },
  {
    id: '3',
    name: 'Udaipur - City of Lakes',
    location: 'Udaipur, Rajasthan', 
    tags: ['city', 'lakes', 'palace'],
    image: '/images/sardar-kamran-khan-zo_udYMcaVc-unsplash.jpg',
    parentPlace: '1'
  },
  {
    id: '4',
    name: 'Jaisalmer - The Golden City',
    location: 'Jaisalmer, Rajasthan',
    tags: ['desert', 'fort', 'heritage'],
    image: '/images/urban-vintage-78A265wPiO4-unsplash.jpg',
    parentPlace: '1'
  }
];

// Trips and itineraries for the Trips & Itineraries tab
export const TRIPS_ITINERARIES_DETAIL = [
  {
    id: '1',
    name: 'Rajasthan Royal Heritage Tour',
    description: '7-day cultural journey through palaces and forts',
    duration: '7 days',
    type: 'Cultural Tour',
    status: 'Completed',
    image: '/images/keegan-houser--Q_t4SCN8c4-unsplash.jpg',
    parentPlace: '1'
  },
  {
    id: '2', 
    name: 'Desert Safari Adventure',
    description: 'Experience the Thar Desert with camel safari',
    duration: '3 days',
    type: 'Adventure',
    status: 'Completed',
    image: '/images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg',
    parentPlace: '1'
  },
  {
    id: '3',
    name: 'Rajasthan Food Trail',
    description: 'Culinary journey through traditional Rajasthani cuisine',
    duration: '5 days', 
    type: 'Food Tour',
    status: 'Upcoming',
    image: '/images/sardar-kamran-khan-zo_udYMcaVc-unsplash.jpg',
    parentPlace: '1'
  },
  {
    id: '4',
    name: 'Palace Photography Tour',
    description: 'Capture the architectural beauty of Rajasthani palaces',
    duration: '4 days',
    type: 'Photography',
    status: 'Planned',
    image: '/images/urban-vintage-78A265wPiO4-unsplash.jpg',
    parentPlace: '1'
  }
];
