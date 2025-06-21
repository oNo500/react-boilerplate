export interface ApiResponse<T = unknown> {
  data?: T;
  error?: ApiError;
  meta?: Meta;
}
export interface ApiError {
  code: string;
  message: string;
  details?: FieldError[];
}

export interface FieldError {
  field: string;
  message: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginData {
  user: User;
  token: string;
  expiresIn: number;
}
