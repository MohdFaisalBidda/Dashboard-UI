import React from "react";
import DashboardSection from "./DashboardSection";
import ProjectsSection from "../LeftHeader/ProjectsSection";

export default function LeftHeader() {
  return (
    <>
      <div className="xl:w-[20%] w-full h-screen overflow-y-hidden border-r border-[#E9EBF0]">
        <div className="flex justify-between p-8">
          <h1 className="font-semibold text-xl">Dashboard</h1>
          <h1>Icon</h1>
        </div>
        <hr />
        <div className="flex justify-between p-8">
          <div className="flex">
            <h1 className="font-semibold">Profile</h1>
            <div className="ml-4">
              <h1 className="text-xs font-bold">Nancy Martino</h1>
              <h1 className="text-xs mt-1 text-gray-400 font-bold">Designer</h1>
            </div>
          </div>
          <h1>Icon</h1>
        </div>
        <hr />
        <DashboardSection />
        <ProjectsSection />
      </div>
    </>
  );
}
