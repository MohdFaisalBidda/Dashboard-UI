import React from "react";
import Head from "./head";
import Head2 from "./Head2";
import Boards from "./Boards";
import { TbMicrophone } from "react-icons/tb";
import { AiOutlineFolder } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import profile from "../../../../public/profile.jpg";
import Image from "next/image";

export default function TopBar() {
  return (
    <>
      <div className="xl:w-[75%] pb-0 border-r border-[#E9EBF0]">
        <div className="h-[92px] p-6 md:visible invisible">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                placeholder="Search Tasks"
                className="bg-white border border-gray-200 p-4 font-semibold rounded-lg text-xs"
              />
              <div className="ml-10 text-gray-400 text-2xl">
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
              <h1 className="text-2xl text-gray-400">
                <AiOutlineFolder />
              </h1>
              <h1 className="text-2xl text-gray-400">
                <AiOutlineBell />
              </h1>
              <Image
                className="rounded-full object-contain w-12 h-12"
                src={profile}
              />
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
