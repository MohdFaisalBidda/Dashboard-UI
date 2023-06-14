import React from "react";
import {
  AiOutlineAppstore,
  AiFillLock,
  AiOutlineFile,
  AiOutlineAppstoreAdd,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { FaGripLines } from "react-icons/fa";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { MdOutlineStrikethroughS } from "react-icons/md";
import { TbChartDots3 } from "react-icons/tb";

export default function Head2() {
  return (
    <div className="flex justify-between xl:flex-row flex-col gap-y-4 xl:mt-8 mt-20 mx-8">
      <div className="flex justify-center w-auto max-w-[25rem] mx-auto xl:mr-0 xl:ml-0 items-center p-1 bg-white border border-gray-200  rounded-lg text-sm font-semibold text-gray-500">
        <div className="flex justify-center items-center border-r px-4 border-gray-200 text-xs">
          <AiOutlineAppstore className="text-2xl mr-2" /> Board View
        </div>
        <div className="flex justify-center items-center px-6 text-xs">
          <FaGripLines className="text-2xl mr-2" /> List View
        </div>
      </div>
      <div className="flex xl:flex-row flex-col xl:items-center items-start text-gray-400 text-xs font-semibold">
        <div className="flex justify-between items-center ">
          <h1 className="flex items-center justify-center px-6">
            <AiFillLock className="text-2xl mr-2" /> Limited Access
          </h1>
          <h1 className="px-6">Owners</h1>
          <h1 className="px-6">Twitter team</h1>
        </div>
        <div className="px-6 xl:max-w-xs gap-3 xl:mx-0 mx-auto  flex xl:flex-row xl:mt-0 mt-4 relative">
          <AiOutlineSearch className="absolute ml-2 text-gray-400 top-4 text-xl" />
          <input
            placeholder="Search Tasks"
            className="bg-white border border-gray-200 p-4 font-semibold rounded-lg text-xs min-w-[200px] placeholder:px-4"
          />
          <BiExit className="absolute right-8 text-gray-400 top-4 text-xl" />
        </div>
      </div>
      <div className="flex xl:justify-end justify-center xl:ml-auto items-center gap-2">
        <div className="p-2 rounded-lg bg-white">
          <AiOutlineFile className="text-gray-400" />
        </div>
        <div className="p-2 rounded-lg bg-white">
          <MdOutlineStackedLineChart className=" text-gray-400" />
        </div>
        <div className="p-2 rounded-lg bg-white">
          <MdOutlineStrikethroughS className=" text-gray-400" />
        </div>
        <div className="p-2 rounded-lg bg-white">
          <TbChartDots3 className=" text-gray-400" />
        </div>
        <div className="p-2 rounded-lg bg-white">
          <AiOutlineAppstore className=" text-gray-400" />
        </div>
      </div>
    </div>
  );
}
