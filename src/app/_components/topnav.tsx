import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

/* eslint-disable @next/next/no-img-element */
export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 shadow-sm  shadow-slate-400">
      <div>
        <h1 className="flex items-center gap-2 text-3xl  font-semibold">
          <span className="cursor-pointer">SpaceVerse</span>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ultraviolet/40/planet.png"
            alt="planet"
          />
        </h1>
      </div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
