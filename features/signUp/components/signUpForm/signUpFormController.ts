import { createUserWithEmailAndPassword } from "firebase/auth";
import * as yup from "yup";

import { auth } from "@/configs/FirebaseConfig";
import { IResponseError, ISignUpForm } from "./signUpFormInterface";

export class SignUpFormController {
  static initialValues: ISignUpForm = {
    fullName: "",
    email: "",
    password: "",
  };

  onCreateAccount = async ({
    ...data
  }: ISignUpForm): Promise<string | undefined> => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (error: unknown) {
      return this.errorMessages(error);
    }
  };

  get initialValues(): ISignUpForm {
    return SignUpFormController.initialValues;
  }

  validationSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  errorMessages = (error: unknown): string | undefined => {
    console.log("error:", JSON.stringify(error, null, 2));
    if (typeof error === "object") {
      const errorObj = error as IResponseError;
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
