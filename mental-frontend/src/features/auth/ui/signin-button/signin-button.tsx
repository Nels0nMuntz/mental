"use client";

import React from "react";
import { UserRound } from "lucide-react";
import { Button } from "@/shared/ui";

interface Props {
  onClick: () => void;
}

export function SignInButton({ onClick }: Props) {
  return (
    <Button
      className='flex items-center gap-x-2 px-4 py-3 sm:px-5 sm:py-4 text-green text-sm font-bold rounded-xl bg-swamp lg:bg-transparent transition-all duration-150 focus-visible:bg-swamp focus-visible:shadow-signin-button hover:bg-swamp hover:shadow-signin-button active:shadow-none active:bg-green active:text-white flex-shrink-0'
      onClick={onClick}
    >
      <UserRound className='stroke-current' />
      <span>Sign in</span>
    </Button>
  );
}
