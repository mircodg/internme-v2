"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <>
      <Authenticated>
        <UserButton />
        <p>Authenticated</p>
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </>
  );
}
