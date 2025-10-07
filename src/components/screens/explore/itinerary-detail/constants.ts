import type { ItineraryDetail } from "./types";

export const MOCK_ITINERARY: ItineraryDetail = {
  id: "1",
  title: "San Francisco Highlights",
  rating: 4.8,
  reviewCount: 124,
  author: "Sarah Chen",
  description: "Experience the best of San Francisco in 3 unforgettable days. From iconic landmarks to hidden gems, this itinerary covers all the must-see attractions while leaving time for spontaneous discoveries.",
  duration: "3 days",
  budget: "$200-400 per person",
  bestTime: "April - October",
  difficulty: "Easy",
  tags: ["Cultural", "Mid-range", "Easy"],
  days: [
    {
      day: 1,
      title: "Classic San Francisco",
      activities: [
        {
          id: "1",
          time: "9:00 AM",
          name: "Golden Gate Bridge",
          description: "Start your SF adventure at the iconic Golden Gate Bridge. Walk or bike across for stunning views.",
          duration: "2 hours",
          price: "Free",
          tip: "Best photos from Crissy Field. Bring layers - it can be windy!"
        },
        {
          id: "2",
          time: "12:00 PM",
          name: "Fisherman's Wharf",
          description: "Explore the bustling waterfront, see sea lions at Pier 39, and enjoy fresh seafood.",
          duration: "3 hours",
          price: "$25-40",
          tip: "Try the clam chowder in sourdough bread bowls"
        },
        {
          id: "3",
          time: "4:00 PM",
          name: "Lombard Street",
          description: "Drive or walk down the world's most crooked street with beautiful gardens and city views.",
          duration: "1 hour",
          price: "Free"
        },
        {
          id: "4",
          time: "6:00 PM",
          name: "Chinatown Dinner",
          description: "Experience authentic Chinese cuisine in the oldest Chinatown in North America.",
          duration: "2 hours",
          price: "$30-50",
          tip: "Try dim sum at Golden Dragon or Z&Y Restaurant"
        }
      ]
    },
    {
      day: 2,
      title: "Culture & Views",
      activities: [
        {
          id: "5",
          time: "10:00 AM",
          name: "Alcatraz Island",
          description: "Take the ferry to the infamous former federal prison. Audio tour included with ticket.",
          duration: "3 hours",
          price: "$45-55",
          tip: "Book tickets in advance - they sell out quickly!"
        },
        {
          id: "6",
          time: "2:30 PM",
          name: "Union Square",
          description: "Shop, people-watch, and explore the heart of downtown San Francisco.",
          duration: "2 hours",
          price: "Free"
        },
        {
          id: "7",
          time: "5:00 PM",
          name: "Twin Peaks Sunset",
          description: "Drive up to Twin Peaks for panoramic views of the city and bay at golden hour.",
          duration: "1.5 hours",
          price: "Free",
          tip: "Arrive 30 minutes before sunset for the best light"
        }
      ]
    },
    {
      day: 3,
      title: "Parks & Neighborhoods",
      activities: [
        {
          id: "8",
          time: "9:30 AM",
          name: "Golden Gate Park",
          description: "Explore the Japanese Tea Garden, Conservatory of Flowers, and de Young Museum.",
          duration: "4 hours",
          price: "$15-25",
          tip: "Rent bikes to cover more ground in the large park"
        },
        {
          id: "9",
          time: "2:00 PM",
          name: "Haight-Ashbury",
          description: "Walk through the historic hippie neighborhood with vintage shops and colorful Victorian houses.",
          duration: "2 hours",
          price: "Free"
        },
        {
          id: "10",
          time: "5:30 PM",
          name: "Mission District Food Tour",
          description: "End your trip with tacos, burritos, and craft beer in the vibrant Mission neighborhood.",
          duration: "3 hours",
          price: "$40-60",
          tip: "Try La Taqueria for the best burritos in the city"
        }
      ]
    }
  ],
  tips: {
    gettingAround: [
      "Public transport: Muni passes available for $25/day",
      "Uber/Lyft widely available but can be expensive",
      "Walking is great for most downtown attractions",
      "Parking is limited and expensive ($3-5/hour)"
    ],
    whatToPack: [
      "Layers - SF weather changes quickly",
      "Comfortable walking shoes",
      "Light jacket or sweater",
      "Sunscreen and sunglasses"
    ],
    moneySavingTips: [
      "Many museums have free days for residents",
      "Happy hour specials at most restaurants",
      "Free walking tours available downtown",
      "Picnic in parks to save on meal costs"
    ],
    localEtiquette: [
      "Stand right on escalators",
      "Tipping: 18-20% at restaurants",
      "Be mindful of homeless population",
      "Don't leave valuables visible in cars"
    ]
  }
};
