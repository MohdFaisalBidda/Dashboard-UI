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

export default function TopBar({ modal, setModal }) {
  return (
    <>
      <div
        className={`${
          modal
            ? "w-full pb-0 xl:border-r border-[#E9EBF0] max-w-full hidden"
            : ""
        }`}
      >
        <div className="hidden xl:block h-[89px] p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[32px]">
              <div className="flex min-w-[200px] justify-between rounded-md border-[1px] border-[#EBEEF2] bg-white p-[12px] drop-shadow-sm">
                <div className="flex items-center gap-3">
                  <AiOutlineSearch className=" text-gray-300 text-lg" />
                  <p className="cursor-pointer text-[12px] font-semibold text-[#98A2B2]">
                    Search Here
                  </p>
                </div>
                <BiExit className=" text-gray-300 text-xl" />
              </div>
              <TbMicrophone className="text-gray-400" />
            </div>
            <div className="flex ">
              <ul className="flex text-xs font-semibold text-gray-400 gap-6">
                <li className="font-bold text-black">Dashboard</li>
                <li className="">My Tasks</li>
                <li className="">My Tasks</li>
                <li className="">Reporting</li>
                <li className="">Portfolios</li>
                <li className="">Goals</li>
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
                <Image
                  alt="profile"
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
