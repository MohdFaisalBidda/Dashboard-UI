import Image from "next/image";
import React from "react";
import { MdEdit } from "react-icons/md";
import profile from "../../../../public/profile.jpg";
import { IoMdAddCircle } from "react-icons/io";


export default function head() {
  return (
    <div className="flex md:justify-between items-center mt-5 ">
      <div className="flex items-center p-6">
        <h1 className="text-2xl font-bold">Tasks Boards</h1>
        <div className="ml-10 text-2xl text-gray-400">{<MdEdit />}</div>
      </div>
      <div className="flex md:visible invisible">
        <ul className="flex text-xs font-semibold text-gray-400">
          <li className="font-bold mx-4 text-blue-500 border-b-2  border-blue-500">
            Timeline
          </li>
          <li className=" mx-4">Calendar</li>
          <li className=" mx-4">Dashboard</li>
          <li className=" mx-4">Progress</li>
          <li className=" mx-4">Forms</li>
          <li className=" mx-4">More</li>
        </ul>
      </div>
      <div className="flex mx-20 justify-center items-center">
        <Image
          className="rounded-full object-contain w-12 h-12"
          src={profile}
        />
        <Image
          className="rounded-full object-contain w-12 h-12"
          src={profile}
        />
        <Image
          className="rounded-full object-contain w-12 h-12"
          src={profile}
        />
       <IoMdAddCircle className="ml-4 text-2xl text-gray-400"/>
      </div>
    </div>
  );
}
