export interface ItineraryActivity {
  id: string;
  time: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  tip?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: ItineraryActivity[];
}

export interface ItineraryDetail {
  id: string;
  title: string;
  rating: number;
  reviewCount: number;
  author: string;
  description: string;
  duration: string;
  budget: string;
  bestTime: string;
  difficulty: string;
  tags: string[];
  days: ItineraryDay[];
  tips: {
    gettingAround: string[];
    whatToPack: string[];
    moneySavingTips: string[];
    localEtiquette: string[];
  };
}
