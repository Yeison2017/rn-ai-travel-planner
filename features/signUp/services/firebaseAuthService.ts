import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/configs/FirebaseConfig";

import { AuthService } from "../components/signUpForm/signUpFormInterface";

class FirebaseAuthService implements AuthService {
  async createUser(email: string, password: string): Promise<void> {
    await createUserWithEmailAndPassword(auth, email, password);
  }
}

export default FirebaseAuthService;
