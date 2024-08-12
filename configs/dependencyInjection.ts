import "reflect-metadata";
import { container } from "tsyringe";

import FirebaseAuthService from "@/features/signUp/services/firebaseAuthService";
import { SignInService } from "@/features/signIn";
import FirebaseSignInService from "@/features/signIn/services/firebaseSignInService";
import { AuthService } from "@/features/signUp/services/interfaces";

export function configureDependencies() {
  container.register<AuthService>("AuthService", FirebaseAuthService);
  container.register<SignInService>("SignInService", FirebaseSignInService);
}
