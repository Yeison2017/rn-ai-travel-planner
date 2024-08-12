import { inject, autoInjectable } from "tsyringe";
import * as yup from "yup";

import { ResponseError } from "@/interfaces";
import { FieldConfigSignInForm, SignInForm } from "../interfaces";
import { SignInService } from "../services";

@autoInjectable()
export class SignInController {
  constructor(@inject("SignInService") private signInService: SignInService) {}

  static initialValues: SignInForm = {
    email: "",
    password: "",
  };

  get initialValues(): SignInForm {
    return SignInController.initialValues;
  }

  fieldConfigs: FieldConfigSignInForm[] = [
    { name: "email", label: "Email" },
    { name: "password", label: "Password", secureTextEntry: true },
  ];

  validationSchema = yup.object().shape({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  errorMessages = (error: unknown): string | undefined => {
    console.log("error:", JSON.stringify(error, null, 2));
    if (typeof error === "object") {
      const errorObj = error as ResponseError;
      switch (errorObj.code) {
        case "auth/invalid-credential":
          return "Invalid credential";
        case "auth/user-not-found":
          return "User not found";
        case "auth/user-disabled":
          return "User disabled";
        case "auth/wrong-password":
          return "Wrong password";
        default:
          return undefined;
      }
    }
    return undefined;
  };

  onSignIn = async ({ email, password }: SignInForm) => {
    try {
      const user = await this.signInService.signIn(email, password);
      console.log("user:", JSON.stringify(user, null, 2));
    } catch (error: unknown) {
      return this.errorMessages(error);
    }
  };
}
