import "reflect-metadata";
import { container } from "tsyringe";

import { AuthService } from "@/features/signUp/components";
import FirebaseAuthService from "@/features/signUp/services/firebaseAuthService";

export function configureDependencies() {
  container.register<AuthService>("AuthService", FirebaseAuthService);
}
