"use client";

import Image from "next/image";
import { ToggleDarkMode } from "@/components/ToggleDarkMode";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="flex justify-between m-6">
      <Image
        src="/logo.png"
        alt="logo"
        width={120}
        height={120}
        className="w-48"
      />
      <ToggleDarkMode />

      {user ? (
        <SignedIn>
          <UserButton />
        </SignedIn>
      ) : (
        <Button asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
      )}

      <Button asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </div>
  );
}
