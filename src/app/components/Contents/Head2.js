import React from "react";
import {AiOutlineAppstore,AiFillLock,AiOutlineFile,AiOutlineAppstoreAdd} from "react-icons/ai"
import {FaGripLines} from "react-icons/fa"
import {MdOutlineStackedLineChart} from "react-icons/md"
import {MdOutlineStrikethroughS} from "react-icons/md"
import {TbChartDots3} from "react-icons/tb"



export default function Head2() {
  return (
    <div className="flex justify-around items-center">
      <div className="flex items-center p-2 bg-white border border-gray-200 ml-8 rounded-lg text-sm font-semibold text-gray-500">
        <div className="flex justify-center items-center border-r border-gray-200"><AiOutlineAppstore className="text-2xl mr-2"/> Board View</div>
        <div className="flex justify-center items-center px-6"><FaGripLines className="text-2xl mr-2"/> List View</div>
      </div>
      <div className="flex md:visible invisible items-center text-gray-400 text-xs font-semibold">
        <h1 className="flex items-center justify-center px-6"><AiFillLock className="text-2xl mr-2"/> Limited Access</h1>
        <h1 className="px-6">Owners</h1>
        <h1 className="px-6">Twitter team</h1>
        <div className="px-6">
          <input
            placeholder="Search Tasks"
            className="bg-white border border-gray-200 p-4 font-semibold rounded-lg text-xs"
          />
        </div>
      </div>
      <div className="flex mx-2 items-center gap-2">
        <div className="p-2 rounded-lg bg-white"><AiOutlineFile className="text-gray-400"/></div>
        <div className="p-2 rounded-lg bg-white"><MdOutlineStackedLineChart className=" text-gray-400"/></div>
        <div className="p-2 rounded-lg bg-white"><MdOutlineStrikethroughS className=" text-gray-400"/></div>
        <div className="p-2 rounded-lg bg-white"><TbChartDots3 className=" text-gray-400"/></div>
        <div className="p-2 rounded-lg bg-white"><AiOutlineAppstore className=" text-gray-400"/></div>
      </div>
    </div>
  );
}
