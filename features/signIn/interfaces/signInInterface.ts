import { SignInController } from "../controllers";

export interface SignInForm {
  email: string;
  password: string;
}

export type FieldConfigSignInForm = {
  name: keyof typeof SignInController.initialValues;
  label: string;
  secureTextEntry?: boolean;
};
