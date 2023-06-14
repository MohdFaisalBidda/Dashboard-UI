import React from "react";
import Head from "./head";
import Head2 from "./Head2";
import Boards from "./Boards";
import { TbMicrophone } from "react-icons/tb";
import { AiOutlineFolder } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import profile from "../../../../public/nancy.webp";
import Image from "next/image";

export default function TopBar({modal,setModal}) {
  return (
    <>
      <div className={`${modal?"w-full pb-0 xl:border-r border-[#E9EBF0] max-w-full hidden":""}`}>
        <div className="hidden xl:block h-[89px] p-6">
          <div className="flex justify-between items-center">
            <div className=" flex items-center">
              <div className="relative">
                <AiOutlineSearch className="absolute ml-2 text-gray-400 top-4 text-xl" />
                <input
                  placeholder="Search Tasks"
                  className="bg-white border border-gray-200 p-4 font-semibold rounded-lg text-xs min-w-[200px] placeholder:px-4"
                />
                <BiExit className="absolute right-3 text-gray-400 top-4 text-xl" />
              </div>
              <div className="ml-10 text-gray-400 text-lg">
                {<TbMicrophone />}
              </div>
            </div>
            <div className="flex">
              <ul className="flex text-xs font-semibold text-gray-400">
                <li className="font-bold mx-4 text-black">Dashboard</li>
                <li className=" mx-4">My Tasks</li>
                <li className=" mx-4">My Tasks</li>
                <li className=" mx-4">Reporting</li>
                <li className=" mx-4">Portfolios</li>
                <li className=" mx-4">Goals</li>
              </ul>
            </div>
            <div className="flex justify-center items-center gap-2">
              <h1 className="text-lg text-gray-400">
                <AiOutlineFolder />
              </h1>
              <h1 className="text-lg text-gray-400">
                <AiOutlineBell />
              </h1>
              <div className="relative">
                <p className="absolute right-0 text-xs font-semibold bg-red-500 text-white rounded-full h-5 w-5 flex justify-center items-center">
                  4
                </p>
                <Image  alt="profile"
                  className=" object-cover rounded-full w-10 h-10  border-blue-500 border-2 p-1"
                  src={profile}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="" />
        <Head />
        <Head2 />
        <Boards />
      </div>
    </>
  );
}
