import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/configs/FirebaseConfig";
import { ISignUpForm } from "../components";
import { errorMessages } from "../components/signUpForm/errorMessagesForms";

export class CreateAccount {
  async onCreateAccount({ ...data }: ISignUpForm): Promise<string | undefined> {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (error: unknown) {
      return errorMessages(error);
    }
  }
}
