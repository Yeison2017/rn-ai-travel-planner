export interface SignUpForm {
  fullName: string;
  email: string;
  password: string;
}

export interface AuthService {
  createUser(email: string, password: string): Promise<void>;
}

export interface ResponseError {
  code: string;
  customData: {
    appName: string;
    _tokenResponse: {
      error: {
        code: number;
        message: string;
        errors: {
          message: string;
          domain: string;
          reason: string;
        }[];
      };
    };
  };
  name: string;
}
