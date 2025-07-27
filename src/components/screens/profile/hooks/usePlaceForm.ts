import { useState } from 'react';
import type { PlaceFormData } from '../types';

export const usePlaceForm = () => {
  const [formData, setFormData] = useState<PlaceFormData>({
    placeName: '',
    tags: {
      Mountain: false,
      Historical: false,
      Adventure: false,
      Beach: false,
      Nature: false,
      Food: false,
      Monastery: false,
      City: false,
    },
    type: 'Hidden',
    shortDescription: '',
    longDescription: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof PlaceFormData | 'tags', string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof PlaceFormData | 'tags', string>> = {};

    if (!formData.placeName.trim()) {
      newErrors.placeName = 'Place name is required';
    }

    const selectedTags = Object.values(formData.tags).some(tag => tag);
    if (!selectedTags) {
      newErrors.tags = 'Please select at least one tag';
    }

    if (!formData.shortDescription.trim()) {
      newErrors.shortDescription = 'Short description is required';
    } else if (formData.shortDescription.length > 150) {
      newErrors.shortDescription = 'Short description must be 150 characters or less';
    }

    if (!formData.longDescription.trim()) {
      newErrors.longDescription = 'Long description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTagChange = (tag: keyof PlaceFormData['tags']) => {
    setFormData(prev => ({
      ...prev,
      tags: {
        ...prev.tags,
        [tag]: !prev.tags[tag]
      }
    }));
  };

  const updateField = (field: keyof PlaceFormData, value: string | PlaceFormData['type']) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    errors,
    validateForm,
    handleTagChange,
    updateField,
    setFormData,
  };
}; 