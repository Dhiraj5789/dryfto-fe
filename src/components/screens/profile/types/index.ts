export interface ProfileData {
  name: string;
  username: string;
  bio: string;
  location: string;
  joinDate: string;
  profileImage: string;
}

export interface PlaceData {
  id: number;
  name: string;
  location: string;
  image: string;
  tags: string[];
}

export interface ItineraryData {
  id: number;
  name: string;
  duration: string;
  price: string;
  status: string;
  image: string;
}

export interface ContinentData {
  name: string;
  color: string;
  path: string;
}

export interface TravelStat {
  icon: string;
  label: string;
  value: string;
  color: string;
}

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface ProfileActionsProps {
  onEditProfile: () => void;
  onShareProfile: () => void;
}

export interface ProfileInfoProps {
  name: string;
  username: string;
  bio: string;
  location: string;
  joinDate: string;
  profileImage: string;
}

export interface EmptyStateProps {
  message: string;
  description?: string;
}

export interface TabsProps {
  tabs: Tab[];
  selectedTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export interface PlaceFormData {
  placeName: string;
  tags: {
    Mountain: boolean;
    Historical: boolean;
    Adventure: boolean;
    Beach: boolean;
    Nature: boolean;
    Food: boolean;
    Monastery: boolean;
    City: boolean;
  };
  type: 'Hidden' | 'Commercial';
  shortDescription: string;
  longDescription: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
} 