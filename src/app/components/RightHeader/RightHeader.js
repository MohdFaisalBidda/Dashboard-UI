import React from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import avatar1 from "../../../../public/avatar-1.jpg";
import avatar2 from "../../../../public/avatar-2.webp";
import avatar3 from "../../../../public/avatar-3.webp";

const title = [
  {
    icon: avatar1,
  },
  {
    icon: avatar2,
    tag: (
      <p className="z-10 absolute -right-1 text-[10px] font-bold bg-red-500 text-white rounded-full h-5 w-5 flex justify-center items-center">
        12
      </p>
    ),
  },
  {
    icon: avatar3,
  },
  {
    icon: avatar1,
    tag: (
      <p className="z-10 absolute -right-1 text-[10px] font-bold bg-red-500 text-white rounded-full h-5 w-5 flex justify-center items-center">
        4
      </p>
    ),
  },
  {
    icon: avatar2,
  },
  {
    icon: avatar3,
  },
  {
    icon: avatar1,
  },
  {
    icon: avatar2,
    tag: (
      <p className="z-10 absolute -right-1 text-[10px] font-bold bg-red-500 text-white rounded-full h-5 w-5 flex justify-center items-center">
        2
      </p>
    ),
  },
  {
    icon: avatar3,
  },
  {
    icon: avatar1,
  },
  {
    icon: avatar2,
  },
  {
    icon: avatar3,
  },
  {
    icon: avatar1,
  },
  {
    icon: avatar2,
  },
  {
    icon: avatar3,
  },
];

export default function RightHeader() {
  return (
    <div className=" hidden xl:block  border">
      <div className="h-[90px] flex justify-center items-center border-b-[1px] border-[#E9EBF0]">
        <RxCross2 className="text-xl text-gray-400" />
      </div>

      <div className="my-28 p-3 flex justify-center flex-col items-center">
        {title.map((item, key) => {
          return (
            <div key={key} className="relative">
              <p className="absolute bottom-2 right-0 text-xs font-semibold bg-red-500 border-2 border-white text-white rounded-full h-3 w-3 flex justify-center items-center"></p>
              <Image
                alt="profile"
                className=" object-cover rounded-full w-12 h-12 p-1"
                src={item.icon}
              />
              {item.tag}
            </div>
          );
        })}
      </div>
      <div className="flex  justify-center items-center border-t-[1px] border-[#E9EBF0] p-[33px]">
        <HiOutlineArrowRight className="text-xl text-gray-400" />
      </div>
    </div>
  );
}
