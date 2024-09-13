import React from "react";
import { FadeLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <FadeLoader />
    </div>
  );
}
