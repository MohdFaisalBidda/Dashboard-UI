import React from "react";
import DashboardSection from "./DashboardSection";
import ProjectsSection from "./ProjectsSection";
import {MdMenuOpen} from "react-icons/md"
import {HiOutlineChevronDown} from "react-icons/hi"
import Image from "next/image";
import profile from "../../../../public/profile.jpg"

export default function LeftHeader() {
  return (
    <>
      <div className="xl:w-[20%] w-full h-screen overflow-y-hidden border-r border-[#E9EBF0]">
        <div className="flex justify-between p-8">
          <h1 className="font-semibold text-xl">Dashboard</h1>
          <h1 className="text-2xl text-gray-400"><MdMenuOpen/></h1>
        </div>
        <hr />
        <div className="flex justify-between p-8">
          <div className="flex">
            <Image className="rounded-full object-contain w-12 h-12" src={profile}/>
            <div className="ml-4">
              <h1 className="text-xs font-bold">Nancy Martino</h1>
              <h1 className="text-xs mt-1 text-gray-400 font-bold">Designer</h1>
            </div>
          </div>
          <h1 className="text-2xl text-gray-400"><HiOutlineChevronDown/></h1>
        </div>
        <hr />
        <DashboardSection />
        <ProjectsSection />
      </div>
    </>
  );
}
