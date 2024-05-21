"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

/* eslint-disable @next/next/no-img-element */
export function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between p-4 shadow-sm  shadow-slate-400">
      <div>
        <h1 className="flex items-center gap-2 text-lg font-semibold  md:text-3xl">
          <span className="cursor-pointer">SpaceVerse</span>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ultraviolet/40/planet.png"
            alt="planet"
          />
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <SignedOut>
          <div className="cursor-pointer rounded-lg bg-slate-400 p-2 font-bold text-black hover:bg-slate-600 hover:duration-200">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />

          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}
