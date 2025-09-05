import { Trip } from "./interface";

export const SAMPLE_TRIPS: Trip[] = [
  {
    id: '1',
    title: 'Rajasthan Heritage Tour',
    dates: 'March 10-18, 2025',
    locations: ['Jaipur', 'Jodhpur', 'Udaipur', 'Jaisalmer'],
    duration: '8 days',
    travelers: 4,
    rating: 4.5,
    status: 'completed',
    image: '/images/keegan-houser--Q_t4SCN8c4-unsplash.jpg'
  },
  {
    id: '2',
    title: 'Kerala Backwaters & Beaches',
    dates: 'December 5-12, 2024',
    locations: ['Kochi', 'Alleppey', 'Munnar'],
    duration: '8 days',
    travelers: 2,
    rating: 4.8,
    status: 'completed',
    image: '/images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg'
  },
  {
    id: '3',
    title: 'Himalayan Trekking Adventure',
    dates: 'June 1-7, 2025',
    locations: ['Manali', 'Spiti Valley'],
    duration: '7 days',
    travelers: 3,
    status: 'upcoming',
    image: '/images/sardar-kamran-khan-zo_udYMcaVc-unsplash.jpg'
  }
];
