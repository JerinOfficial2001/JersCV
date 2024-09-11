import React from "react";

type Props = {
  onClick: (() => void) | undefined;
  name: string;
  customStyle?: string;
  disable?: boolean;
};

export default function CVButton({
  onClick,
  name,
  customStyle,
  disable,
}: Props) {
  return (
    <div
      onClick={disable ? undefined : onClick}
      className={`${customStyle} font-extrabold rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer`}
    >
      {name}
    </div>
  );
}
