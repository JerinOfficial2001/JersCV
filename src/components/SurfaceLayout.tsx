"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = { children: React.ReactNode; bg?: string };

export default function SurfaceLayout({ children, bg }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="w-full h-[auto] relative">
      {pathname != "/build-resume" && (
        <div
          className="sticky top-0 p-7 w-full flex flex-row justify-between items-start cursor-pointer"
          style={{ zIndex: 2, background: bg ? bg : "white" }}
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            className="dark:invert"
            src={bg ? "/JersCV-dark.svg" : "/JersCV.svg"}
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
