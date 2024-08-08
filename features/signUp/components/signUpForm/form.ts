export interface ISignUpForm {
  fullName: string;
  email: string;
  password: string;
}

export const initialValues: ISignUpForm = {
  fullName: "",
  email: "",
  password: "",
};
