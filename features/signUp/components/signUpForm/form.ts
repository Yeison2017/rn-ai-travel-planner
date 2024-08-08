import * as yup from "yup";

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

export const validationSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup.string().required("Password is required"),
});
