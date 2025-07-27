import { useState } from 'react';
import type { PlaceFormData } from '../types';

interface PlaceDetailsFormProps {
  onSubmit: (data: PlaceFormData) => void;
  onCancel: () => void;
}

export default function PlaceDetailsForm({ onSubmit, onCancel }: PlaceDetailsFormProps) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
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

  const tagsList = [
    { name: 'Mountain', key: 'Mountain' as const },
    { name: 'Beach', key: 'Beach' as const },
    { name: 'Monastery', key: 'Monastery' as const },
    { name: 'Historical', key: 'Historical' as const },
    { name: 'Nature', key: 'Nature' as const },
    { name: 'City', key: 'City' as const },
    { name: 'Adventure', key: 'Adventure' as const },
    { name: 'Food', key: 'Food' as const },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Place Name */}
      <div>
        <label htmlFor="placeName" className="block text-sm font-medium text-gray-700 mb-2">
          Place Name
        </label>
        <input
          type="text"
          id="placeName"
          value={formData.placeName}
          onChange={(e) => setFormData(prev => ({ ...prev, placeName: e.target.value }))}
          placeholder="e.g., Hidden Waterfall Oasis"
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            errors.placeName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.placeName && (
          <p className="mt-1 text-sm text-red-600">{errors.placeName}</p>
        )}
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags
        </label>
        <div className="grid grid-cols-3 gap-3">
          {tagsList.map((tag) => (
            <label key={tag.key} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.tags[tag.key]}
                onChange={() => handleTagChange(tag.key)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{tag.name}</span>
            </label>
          ))}
        </div>
        {errors.tags && (
          <p className="mt-1 text-sm text-red-600">{errors.tags}</p>
        )}
      </div>

      {/* Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="Hidden"
              checked={formData.type === 'Hidden'}
              onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as 'Hidden' | 'Commercial' }))}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Hidden</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="Commercial"
              checked={formData.type === 'Commercial'}
              onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as 'Hidden' | 'Commercial' }))}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Commercial</span>
          </label>
        </div>
      </div>

      {/* Short Description */}
      <div>
        <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-2">
          Short Description
        </label>
        <textarea
          id="shortDescription"
          rows={3}
          value={formData.shortDescription}
          onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
          placeholder="A brief summary of the place (max 150 characters)"
          maxLength={150}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
            errors.shortDescription ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <div className="flex justify-between items-center mt-1">
          {errors.shortDescription && (
            <p className="text-sm text-red-600">{errors.shortDescription}</p>
          )}
          <p className="text-xs text-gray-500 ml-auto">
            {formData.shortDescription.length}/150
          </p>
        </div>
      </div>

      {/* Long Description */}
      <div>
        <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700 mb-2">
          Long Description
        </label>
        <textarea
          id="longDescription"
          rows={6}
          value={formData.longDescription}
          onChange={(e) => setFormData(prev => ({ ...prev, longDescription: e.target.value }))}
          placeholder="Provide a detailed description of the place, its history, what to expect, etc."
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
            errors.longDescription ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.longDescription && (
          <p className="mt-1 text-sm text-red-600">{errors.longDescription}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Submit
        </button>
      </div>
    </form>
  );
} 