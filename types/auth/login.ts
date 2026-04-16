export type Role = "national_coordinator" | "state_coordinator";

export interface AuthUser {
  email: string;
  role: Role;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  data?: AuthUser;
  message?: string;
}