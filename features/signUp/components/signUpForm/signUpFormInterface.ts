export interface ISignUpForm {
  fullName: string;
  email: string;
  password: string;
}

export interface IResponseError {
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
