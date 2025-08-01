import { InternalApiResponse, RegisterData, RegisterResponse } from "./interface";


export const getRegistrationCount = async (): Promise<number> => {
  try {
    const response = await fetch('https://dryfto.onrender.com/api/v1/auth/registered', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data: InternalApiResponse = await response.json();
      
      return data.data.registrationCount;
    }
    
    return 2000;
  } catch {
    return 2000;
  }
};

export const registerUser = async (userData: RegisterData): Promise<RegisterResponse> => {
  try {
    const response = await fetch('https://dryfto.onrender.com/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        first_name: userData.firstName,
        last_name: userData.lastName,
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        message: data.message || 'Registration successful!'
      };
    } else {
      return {
        success: false,
        error: data.error || 'Registration failed'
      };
    }

  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      error: 'Network error. Please try again.'
    };
  }
}; 