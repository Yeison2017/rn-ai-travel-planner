import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/configs/FirebaseConfig";
import { ISignUpForm } from "../components";

export class CreateAccount {
  async onCreateAccount({ ...data }: ISignUpForm) {
    try {
      console.log("data", JSON.stringify(data, null, 2));

      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
    } catch (error) {
      console.log(error);
      alert("error");
    }
  }
}
