import { inject, autoInjectable } from "tsyringe";
import * as yup from "yup";

import {
  FieldConfigSignUpForm,
  SignUpForm,
} from "../interfaces/signUpFormInterface";
import { FormControllerInterface, ResponseError } from "@/interfaces";
import { AuthService } from "../services/interfaces";

@autoInjectable()
export class SignUpFormController
  implements FormControllerInterface<SignUpForm>
{
  constructor(@inject("AuthService") private authService: AuthService) {}

  static initialValues: SignUpForm = {
    fullName: "",
    email: "",
    password: "",
  };

  get initialValues(): SignUpForm {
    return SignUpFormController.initialValues;
  }

  fieldConfigs: FieldConfigSignUpForm[] = [
    { name: "fullName", label: "Full Name" },
    { name: "email", label: "Email" },
    { name: "password", label: "Password", secureTextEntry: true },
  ];

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

  onCreateAccount = async ({
    ...data
  }: SignUpForm): Promise<string | undefined> => {
    try {
      await this.authService.createUser(data.email, data.password);
    } catch (error: unknown) {
      return this.errorMessages(error);
    }
  };
}
