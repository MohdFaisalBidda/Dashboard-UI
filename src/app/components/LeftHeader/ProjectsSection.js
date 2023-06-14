import React from "react";
import { CgHashtag } from "react-icons/cg";
import { IoMdAddCircle } from "react-icons/io";
import {HiOutlineChevronUp} from "react-icons/hi"

const titles = [
  {
    name: "Additional Calendar",
    index: 6,
    icon: <CgHashtag />,
  },
  {
    name: "Brand Logo Design",
    index: 11,
    icon: <CgHashtag />,
  },
  {
    name: "User Research",
    index: "",
    icon: <CgHashtag />,
  },
  {
    name: "Marketing Sales",
    index: 23,
    icon: <CgHashtag />,
  },
  {
    name: "New Project Template",
    index: 2,
    icon: <CgHashtag />,
  },
];

export default function ProjectsSection() {
  return (
    <>
      <div className="flex justify-between py-8 pb-0 ">
        <h2 className="text-gray-400 text-sm font-bold">Projects</h2>
        <h1 className="text-blue-500"><HiOutlineChevronUp/></h1>
      </div>
      <div className="py-8 pt-2">
        {titles.map((item,key) => {
          return (
            <>
              <div key={key} className="flex justify-between items-center my-3">
                <div className="flex items-center mr-4">
                  <h1 className="mr-2 text-blue-500 text-2xl">{item.icon}</h1>
                  <h2 className="text-black font-semibold text-xs ">
                    {item.name}
                  </h2>
                </div>
                <h1 className="bg-blue-100 text-blue-500 text-sm font-bold rounded-full px-2">
                  {item.index}
                </h1>
              </div>
            </>
          );
        })}
        <div className="flex justify-between my-1">
          <div className="flex justify-between items-center">
            <h1 className="mr-2 text-2xl text-blue-500">{<IoMdAddCircle/>}</h1>
            <h2 className="text-black font-semibold text-xs ">
              Add New Project
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
