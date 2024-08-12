export interface AuthService {
  createUser(email: string, password: string): Promise<void>;
}
