import Image from "next/image";
import React from "react";
import {BsFileCheck} from "react-icons/bs"
import {FaFileUpload} from "react-icons/fa"
import {RiMessage2Line} from "react-icons/ri"
import profile from "../../../public/profile.jpg";


export default function Card({heading}) {
  return (
    <div className="h-32 my-5 rounded-lg bg-white p-5 border border-gray-100">
      <div className="flex justify-between">
        <h1 className="text-xs font-semibold">{heading}</h1>
        <div className=" flex gap-2 text-xs">
          <h1><BsFileCheck className="text-xl text-blue-400"/></h1>
          <h1>4</h1>
        </div>
      </div>
      <div className="flex text-xs mt-3 gap-2 font-semibold">
        <h1 className="bg-white text-gray-900 border border-gray-200 rounded-full">
          #UI007
        </h1>
        <h1 className="bg-blue-100 text-blue-500 border rounded-full">
          Design
        </h1>
        <h1 className="bg-yellow-100 text-yellow-600 border border-gray-200 rounded-full">
          Backlog
        </h1>
      </div>
      <div className="flex justify-between text-sm mt-4">
        <div className="flex">
        <Image
          className="rounded-full object-contain w-8 h-8"
          src={profile}
        />
        <Image
          className="rounded-full object-contain w-8 h-8"
          src={profile}
        />
        <Image
          className="rounded-full object-contain w-8 h-8"
          src={profile}
        />
        </div>
        <div className="flex gap-1 text-xs justify-center items-center">
          <div className=" flex gap-2">
            <h1><FaFileUpload className="text-gray-400"/></h1>
            <h1>2</h1>
          </div>{" "}
          <div className=" flex gap-2">
            <h1><RiMessage2Line className="text-gray-400"/></h1>
            <h1>4</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
