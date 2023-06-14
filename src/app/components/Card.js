import Image from "next/image";
import React from "react";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";
import { RiMessage2Fill,  } from "react-icons/ri";
import profile from "../../../public/profile.jpg";
import { IoMdAddCircleOutline } from "react-icons/io";
import avatar1 from "../../../public/avatar-1.jpg";
import avatar2 from "../../../public/avatar-2.webp";
import avatar3 from "../../../public/avatar-3.webp";
import avatar4 from "../../../public/avatar-4.webp";

export default function Card({ heading,tag1,tag2,tag3 }) {
  return (
    <div className="flex flex-col gap-3 p-3 h-32 my-5 rounded-lg bg-white border border-gray-100 drop-shadow-sm">
      {/* first */}
      <div className="flex items-start gap-2 justify-between">
        <h1 className="text-xs font-semibold">{heading}</h1>
        <div className=" flex gap-2 text-xs">
          <h1>
            <BsFileEarmarkCheckFill className="text-lg text-blue-400" />
          </h1>
          <h1>4</h1>
        </div>
      </div>
      {/* second */}
      <div className="flex items-center gap-1 text-[9px] mt-3 font-semibold">
        <p className="bg-white text-gray-900 border px-2 border-gray-200 rounded-full">
          {tag1}
        </p>
        <p className="bg-blue-100 text-blue-500 border rounded-full">{tag2}</p>
        <p className="bg-yellow-100 text-yellow-600 border border-gray-200 rounded-full">
          {tag3}
        </p>
      </div>
      {/* third */}
      <div className="flex items-center gap-2 justify-between text-sm">
        <div className="flex relative justify-center items-center">
          <Image alt="avatar1"
            className=" object-cover rounded-full w-8 h-8  border-white border-2 "
            src={avatar1}
          />
          <Image alt="avatar2"
            className="absolute object-cover rounded-full w-8 h-8 border-white border-2 ml-10"
            src={avatar2}
          />
          <p className="bg-purple-50 text-purple-600 text-xs font-normal rounded-full flex items-center justify-center  w-8 h-8 absolute ml-20">
            +3
          </p>
          <IoMdAddCircleOutline className="absolute xl:ml-40 ml-60 text-xl text-gray-300" />
        </div>
        <div className="flex items-center gap-1.5">
          <h1>
            <FaFileUpload className="text-purple-400 text-base" />
          </h1>
          <p>2</p>
          <h1>
            <RiMessage2Fill className="text-yellow-400 text-lg" />
          </h1>
          <p>4</p>
        </div>
      </div>
    </div>
  );
}
