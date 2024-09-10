"use client";
import SurfaceLayout from "@/components/SurfaceLayout";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <SurfaceLayout>
      <div className="w-full flex flex-row items-center justify-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 items-center sm:items-start w-[550px]">
          <Image
            className="dark:invert"
            src="/JersCV.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="text-sm text-center sm:text-left ">
            <h1 className="text-[25px] font-extrabold ">
              Job-Winning Resume Templates .
            </h1>

            <p className="mt-2 font-[family-name:var(--font-geist-mono)]">
              Get the job 2x as fast.1 Choose from dozens of recruiter-approved
              templates. Click to add ready-to-use skills and phrases to your
              template.
            </p>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <div
              onClick={() => {
                router.push("/choose-template");
              }}
              className="font-extrabold rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer"
            >
              Choose a template
            </div>
          </div>
        </main>
        <div>
          <Image
            className="dark:invert w-[300px] h-[350px] rounded-xl"
            src="/Resume.jpg"
            alt="Next.js logo"
            width={180}
            height={30}
            priority
            style={{ boxShadow: "1px 1px 3px gray" }}
          />
        </div>
      </div>
    </SurfaceLayout>
  );
}
