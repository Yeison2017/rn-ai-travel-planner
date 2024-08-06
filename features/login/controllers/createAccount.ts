import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/configs/FirebaseConfig";

export class CreateAccount {
  async onCreateAccount(email: string, password: string) {
    try {
      if (!email && !password) {
        alert("Please fill in all fields.");
        return;
      }

      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  }
}
