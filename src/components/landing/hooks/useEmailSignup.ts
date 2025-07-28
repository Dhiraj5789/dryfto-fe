import { useState } from 'react';
import { registerUser } from '@/api/users';

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
}

export const useEmailSignup = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // Clear message when user starts typing
    if (message) setMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.firstName || !formData.lastName) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const result = await registerUser({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
      });

      if (result.success) {
        setMessage({ type: 'success', text: result.message || 'Welcome to the waitlist!' });
        setFormData({ email: '', firstName: '', lastName: '' }); // Reset form
      } else {
        setMessage({ type: 'error', text: result.error || 'Registration failed' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    message,
    handleInputChange,
    handleSubmit,
  };
}; 