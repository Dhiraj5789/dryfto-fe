import { LucideIcon } from 'lucide-react';

export interface FeatureIconData {
  icon: LucideIcon;
  label: string;
}

export interface FeatureCardData {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface EmailSignupProps {
  onSubmit: (email: string) => void;
}

export interface FeatureIconProps {
  icon: LucideIcon;
  label: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
} 