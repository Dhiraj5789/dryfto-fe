export interface ICardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    rating: number;
    duration: string;
    price: string;
    reviews: number;
    distance: string;
    categories: string[];
    includes: string[];
    creator: string;
    isFavorite?: boolean;
    onFavoriteToggle?: (id: string) => void;
    onViewDetails?: (id: string) => void;
    onCustomize?: (id: string) => void;
  }
  