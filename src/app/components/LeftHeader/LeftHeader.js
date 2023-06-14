"use client"
import React, { memo } from "react";
import DashboardSection from "./DashboardSection";
import ProjectsSection from "./ProjectsSection";
import { MdMenuOpen, MdOutlineUnfoldMore } from "react-icons/md";
import Image from "next/image";
import profile from "../../../../public/nancy.webp";
import dynamic from "next/dynamic";

const LeftHeader =({setModal,modal})=> {
  
  return (
    <>
      <div className=" border-r border-[#E9EBF0]">
        <div className="flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px] px-[32px]">
          <h1 className="font-semibold text-xl">Dashboard</h1>
          <button className="text-2xl text-gray-400">
            <MdMenuOpen className="xl:hidden"  onClick={()=>setModal(!modal)} />
            <MdMenuOpen  className="hidden xl:flex" />
          </button>
        </div>
        <hr />
        <div
          className="flex justify-between items-center p-8 absolute z-10  flex-row lg:static invisible w-0 opacity-0 duration-500 bg-[#F7F8FA] px-[32px] pb-[30px] transition-all lg:visible lg:w-full lg:opacity-100"
        >
          <div className="flex">
            <Image
              alt="profile"
              className=" object-cover rounded-full w-12 h-12  border-blue-500 border-2 p-1"
              src={profile}
            />
            <div className="ml-4 flex flex-col justify-center">
              <h1 className="text-xs font-bold">Nancy Martino</h1>
              <h1 className="text-xs mt-1 text-gray-400 font-bold">Designer</h1>
            </div>
          </div>
          <h1 className="text-2xl text-gray-400">
            <MdOutlineUnfoldMore  className="text-blue-500 text-xl"/>
          </h1>
        </div>
        <hr />
        <div className={`${!modal?"flex justify-between p-8 absolute z-10  flex-col lg:static invisible w-0 opacity-0 duration-500 bg-[#F7F8FA] ":"w-full h-screen duration-500"} px-[32px] pb-[30px] transition-all lg:visible lg:w-full lg:opacity-100`}>
          <DashboardSection />
          <ProjectsSection />
        </div>
      </div>
    </>
  );
}
export default dynamic(() => Promise.resolve(memo(LeftHeader)), { ssr: false }) 
