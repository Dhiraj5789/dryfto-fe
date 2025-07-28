import { useState, useEffect } from 'react';
import { getRegistrationCount } from '@/api/users';

export const useRegistrationCount = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchCount = async () => {
      const registrationCount = await getRegistrationCount();
      setCount(2000 + registrationCount);
    };

    fetchCount();
  }, []);

  return { count };
}; 