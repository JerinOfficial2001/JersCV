"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = { children: React.ReactNode };

export default function SurfaceLayout({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="w-full h-[auto] relative ">
      {pathname != "/build-resume" && (
        <div
          className="sticky top-0 p-7 w-full flex flex-row justify-between items-start bg-white cursor-pointer"
          style={{ zIndex: 1 }}
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            className="dark:invert"
            src="/JersCV.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            priority
          />
        </div>
      )}
      {children}
    </div>
  );
}
