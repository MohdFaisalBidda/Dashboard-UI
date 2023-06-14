import React from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowRight } from "react-icons/hi";
import profile from "../../../../public/avatar-2.webp";
import Image from "next/image";


export default function RightHeader() {
  return (
    <div className=" hidden xl:block  border">
      <div className="h-[92px] flex justify-center items-center">
        <RxCross2 className="text-xl text-gray-400" />
      </div>

      <div className="mt-32 p-3 flex justify-center flex-col items-center">
        {[...new Array(15)].map((item,key) => {
          return (
            <div key={key} className="relative">
              <p className="absolute bottom-2 right-0 text-xs font-semibold bg-red-500 border-2 border-white text-white rounded-full h-3 w-3 flex justify-center items-center">
              </p>
              <Image alt="profile"
                className=" object-cover rounded-full w-12 h-12 p-1"
                src={profile}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-10 mb-6">
        <HiOutlineArrowRight className="text-xl text-gray-400" />
      </div>
    </div>
  );
}
