import { injectable } from "tsyringe";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/configs/FirebaseConfig";
import { AuthService } from "./interfaces";

@injectable()
class FirebaseAuthService implements AuthService {
  async createUser(email: string, password: string): Promise<void> {
    await createUserWithEmailAndPassword(auth, email, password);
  }
}

export default FirebaseAuthService;
