export interface InternalApiResponse {
    count: number;
    success: boolean;
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