import { inject, autoInjectable } from "tsyringe";
import * as yup from "yup";

import { AuthService, ResponseError, SignUpForm } from "./signUpFormInterface";

@autoInjectable()
export class SignUpFormController {
  constructor(@inject("AuthService") private authService: AuthService) {}

  static initialValues: SignUpForm = {
    fullName: "",
    email: "",
    password: "",
  };

  onCreateAccount = async ({
    ...data
  }: SignUpForm): Promise<string | undefined> => {
    try {
      await this.authService.createUser(data.email, data.password);
    } catch (error: unknown) {
      return this.errorMessages(error);
    }
  };

  get initialValues(): SignUpForm {
    return SignUpFormController.initialValues;
  }

  validationSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  errorMessages = (error: unknown): string | undefined => {
    if (typeof error === "object") {
      const errorObj = error as ResponseError;
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
}
