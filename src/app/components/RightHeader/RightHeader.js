import React from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowRight } from "react-icons/hi";
import profile from "../../../../public/profile.jpg";
import Image from "next/image";

export default function RightHeader() {
  return (
    <div className="w-[5%]  border md:visible invisible">
      <div className="h-[92px] flex justify-center items-center">
        <RxCross2 className="text-2xl text-gray-400" />
      </div>

      <div className="mt-32 flex justify-center flex-col items-center">
        {[...new Array(12)].map(() => {
          return (
            <Image
              className="rounded-full object-contain w-12 h-12"
              src={profile}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-36">
        <HiOutlineArrowRight className="text-2xl text-gray-400"/>
      </div>
    </div>
  );
}
