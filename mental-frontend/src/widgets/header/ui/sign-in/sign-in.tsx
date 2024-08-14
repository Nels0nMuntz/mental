"use client";

import { useSignIn } from "@/features/auth/model";
import { SignInButton } from "@/features/auth/ui";

export function SignIn() {
  const { signin } = useSignIn();

  return <SignInButton onClick={signin} />;
}
