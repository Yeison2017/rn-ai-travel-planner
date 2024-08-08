interface IError {
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

export const errorMessages = (error: unknown): string | undefined => {
  if (typeof error === "object") {
    const errorObj = error as IError;
    switch (errorObj.code) {
      case "auth/invalid-email":
        return "Invalid email";
      case "auth/email-already-in-use":
        return "Email already exists";
      case "auth/weak-password":
        return "Password is too weak";
      case "auth/user-disabled":
        return "User disabled";
      case "auth/user-not-found":
        return "User not found";
      case "auth/wrong-password":
        return "Wrong password";
      default:
        return undefined;
    }
  }
  return undefined;
};
