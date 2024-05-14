import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Header() {

  return (
    <div className="bg-gray-600 text-neutral-100">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">Home</Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
        <Link href='/dashboard'>Dashboard</Link>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
