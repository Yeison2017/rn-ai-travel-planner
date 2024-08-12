import { SignUpFormController } from "../controllers";

export interface SignUpForm {
  fullName: string;
  email: string;
  password: string;
}

export type FieldConfigSignUpForm = {
  name: keyof typeof SignUpFormController.initialValues;
  label: string;
  secureTextEntry?: boolean;
};
