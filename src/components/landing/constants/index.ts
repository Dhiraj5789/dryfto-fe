import { MapPinIcon, CompassIcon, StarIcon } from 'lucide-react';
import type { FeatureIconData, FeatureCardData } from '../types';

export const FEATURE_ICONS: FeatureIconData[] = [
  {
    icon: MapPinIcon,
    label: 'Discover',
  },
  {
    icon: CompassIcon,
    label: 'Explore',
  },
  {
    icon: StarIcon,
    label: 'Experience',
  },
];

export const FEATURE_CARDS: FeatureCardData[] = [
  {
    icon: MapPinIcon,
    title: 'Hidden Treasures',
    description: 'Places that exist beyond the guidebooks',
  },
  {
    icon: CompassIcon,
    title: 'Curated Journeys',
    description: 'Thoughtfully selected experiences',
  },
  {
    icon: StarIcon,
    title: 'Authentic Moments',
    description: 'Stories waiting to be discovered',
  },
];

export const BRAND_TEXT = {
  tagline: 'Curated for the curious • Crafted for the adventurous',
  copyright: '© 2025 Dryfto. Crafting extraordinary journeys.',
  brandName: 'Dryfto',
} as const; 