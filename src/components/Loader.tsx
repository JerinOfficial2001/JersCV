import React from "react";
import { FadeLoader } from "react-spinners";

type Props = {};

export default function Loader({}: Props) {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <FadeLoader />
    </div>
  );
}
