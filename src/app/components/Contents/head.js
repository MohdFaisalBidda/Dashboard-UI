import Image from "next/image";
import React from "react";
import { MdEdit } from "react-icons/md";
import avatar1 from "../../../../public/avatar-1.jpg";
import avatar2 from "../../../../public/avatar-2.webp";
import avatar3 from "../../../../public/avatar-3.webp";
import avatar4 from "../../../../public/avatar-4.webp";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function head() {
  return (
    <div className="xl:flex-row flex flex-col md:justify-between items-center mt-5 xl:top-0 top-8  relative">
      <div className="flex items-center px-6 pt-4 pb-3">
        <h1 className="xl:text-2xl text-3xl font-semibold">Tasks Boards</h1>
        <div className="xl:ml-10 ml-5 xl:text-2xl text-xl  text-gray-400">
          {<MdEdit />}
        </div>
      </div>
      <div className="flex">
        <ul className="flex gap-2 text-[10px] xl:text-xs justify-center font-semibold text-gray-400">
          <li className="font-bold text-blue-500 border-b-2  border-blue-500">
            Timeline
          </li>
          <li className=" mx-2">Calendar</li>
          <li className=" mx-2">Dashboard</li>
          <li className=" mx-2">Progress</li>
          <li className=" mx-2">Forms</li>
          <li className=" mx-2">More</li>
        </ul>
      </div>
      <div className="relative flex mr-20 xl:mx-28 justify-center items-center xl:my-0 my-2 ">
        <Image  alt="avatar1"
          className=" object-cover rounded-full w-10 h-10  border-white border-2 mr-14"
          src={avatar1}
        />
        <Image alt="avatar2"
          className="absolute object-cover rounded-full w-10 h-10 border-white border-2"
          src={avatar2}
        />
        <Image alt="avatar3"
          className="absolute object-cover rounded-full w-10 h-10 border-white border-2 ml-14"
          src={avatar3}
        />
        <Image alt="avatar4"
          className="absolute object-cover rounded-full w-10 h-10 border-white border-2 ml-28"
          src={avatar4}
        />
        <Image alt="avatar1"
          className="absolute object-cover rounded-full w-10 h-10 border-white border-2 ml-28"
          src={avatar1}
        />
        <p className="bg-gray-50 text-gray-600 text-xs font-normal rounded-full flex items-center justify-center  w-8 h-8 absolute ml-40">
          +5
        </p>
        <IoMdAddCircleOutline className="absolute xl:ml-56 ml-60 text-xl text-gray-300" />
      </div>
    </div>
  );
}
