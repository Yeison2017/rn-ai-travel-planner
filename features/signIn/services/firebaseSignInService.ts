import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/configs/FirebaseConfig";
import { ResponseSignIn, SignInService } from "./interfaces";

class FirebaseSignInService implements SignInService {
  async signIn(email: string, password: string): Promise<ResponseSignIn> {
    const user = await signInWithEmailAndPassword(auth, email, password);
    const responseSignIn: ResponseSignIn = {
      uid: user.user.uid,
      email: user.user.email ?? "",
    };
    return responseSignIn;
  }
}

export default FirebaseSignInService;
