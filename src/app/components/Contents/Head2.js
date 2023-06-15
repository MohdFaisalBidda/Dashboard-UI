import React from "react";
import {
  AiOutlineAppstore,
  AiFillLock,
  AiOutlineFile,
  AiOutlineSearch,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { MdOutlineStrikethroughS } from "react-icons/md";
import { TbChartDots3 } from "react-icons/tb";

export default function Head2() {
  return (
    <div className="flex flex-col items-center justify-between gap-3 px-[16px] pt-[28px] md:px-[36px] xl:flex-row mt-4 xl:mt-0">
      <div className="flex w-full flex-wrap items-center justify-between gap-2 xl:w-auto xl:gap-4">
        <div className="grid grid-cols-2 gap-2 rounded-lg bg-white drop-shadow-sm">
          <div className="flex cursor-pointer items-center gap-2 rounded-l-lg border-r-[1px] border-[#EBEEF2] bg-[#FAFBFC] p-[8px] text-[12px] font-semibold text-[#606C80]">
            <AiOutlineAppstore className="text-lg mr-2 text-gray-300" /> Board
            View
          </div>
          <div className="flex cursor-pointer items-center gap-2 p-[8px] text-[12px] font-semibold text-[#606C80]">
            <GiHamburgerMenu className="text-lg mr-2 text-gray-300" /> List View
          </div>
        </div>
        <div className="hidden h-8 w-[1px] bg-[#EBEEF2] xl:block"></div>
        <div className="flex cursor-pointer items-center gap-2">
          <div className="flex justify-between items-center ">
            <h1 className="flex items-center justify-center text-[12px] font-semibold text-gray-400">
              <AiFillLock className="text-lg mr-2 text-gray-400" /> Limited
              Access
            </h1>
          </div>
        </div>
        <div className="hidden h-8 w-[1px] bg-[#EBEEF2] xl:block"></div>
        <div className="flex items-center gap-3">
          <p className="cursor-pointer text-[12px] font-semibold text-[#98A2B2]">
            Owners
          </p>
          <AiOutlineTwitter className="text-xs  text-blue-500" />
          <p className="cursor-pointer text-[12px] font-semibold text-[#98A2B2]">
            Twitter team
          </p>
        </div>
      </div>
      <div className="flex w-full max-w-[300px] items-center gap-3 self-start rounded-md border-[1px] border-[#EBEEF2] bg-white py-[8px] pl-[8px] pr-8 xl:w-auto">
        <AiOutlineSearch className="text-gray-400" />
       <p className="text-[12px] font-semibold text-[#98A2B2]">Search Here</p>
      </div>
      <div className="flex gap-2 self-start">
        <div className="rounded-lg bg-white p-2 drop-shadow-sm">
          <AiOutlineFile className="text-gray-400" />
        </div>
        <div className="rounded-lg bg-white p-2 drop-shadow-sm">
          <MdOutlineStackedLineChart className=" text-gray-400" />
        </div>
        <div className="rounded-lg bg-white p-2 drop-shadow-sm">
          <MdOutlineStrikethroughS className=" text-gray-400" />
        </div>
        <div className="rounded-lg bg-white p-2 drop-shadow-sm">
          <TbChartDots3 className=" text-gray-400" />
        </div>
        <div className="rounded-lg bg-white p-2 drop-shadow-sm">
          <AiOutlineAppstore className=" text-gray-400" />
        </div>
      </div>
    </div>
  );
}
