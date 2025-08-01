export interface InternalApiResponse {
    data: {
        registrationCount: number;
    };
    is_success: boolean;
}

export interface RegisterData {
    email: string;
    firstName: string;
    lastName: string;
}

export interface RegisterResponse {
    success: boolean;
    message?: string;
    error?: string;
}