import React from "react";
import {HiOutlineChevronUp} from "react-icons/hi"
import {BiSolidAnalyse,BiSolidCreditCard} from "react-icons/bi"
import {RxDashboard} from "react-icons/rx"
import {RiPhoneLockFill} from "react-icons/ri"
import {LuSettings2} from "react-icons/lu"
import {IoMdAnalytics} from "react-icons/io"
import {AiFillTag, AiOutlineAppstoreAdd, AiOutlineClockCircle, AiOutlineCreditCard} from "react-icons/ai"
import { MdImageSearch, MdInbox, MdOutlineDriveFolderUpload } from "react-icons/md";
{/* 








*/}
const title = [
  {
    name: "Inbox",
    index: 4,
    icon:<MdInbox/>
  },
  {
    name: "Drive Files",
    index: 435,
    icon:<MdOutlineDriveFolderUpload/>
  },
  {
    name: "Boards",
    index: 5,
    icon:<AiOutlineAppstoreAdd/>
  },
  {
    name: "Updates",
    index: "",
    icon:<AiOutlineClockCircle/>
  },
  {
    name: "Analytics",
    index: 2,
    icon:<IoMdAnalytics/>
  },
  {
    name: "CRM Dashboard",
    index: 2,
    icon:<RxDashboard/>
  },
  {
    name: "Ecommerce",
    index: "",
    icon:<AiFillTag/>
  },
  {
    name: "Cryptocurrency",
    index: "",
    icon:<AiOutlineCreditCard/>
  },
  {
    name: "Projects",
    index: "",
    icon:<RiPhoneLockFill/>
  },
  {
    name: "NFT Marketplace",
    index: "",
    icon:<MdImageSearch/>
  },
  {
    name: "Settings",
    index: 2,
    icon:<LuSettings2/> 
  },
];

export default function DashboardSection() {
  return (
    <>
      <div className="flex justify-between p-8 pb-0">
        <h2 className="text-gray-400 text-xs font-bold">DASHBOARDS</h2>
        <h1 className="text-blue-500"><HiOutlineChevronUp/></h1>
      </div>
      <div className="p-8 pt-3 pb-3 md:visible invisible">
        {title.map((item) => {
          return (
            <>
              <div className="flex justify-between my-3">
                <div className="flex items-center">
                  <h1 className="mr-4 text-2xl text-blue-500">{item.icon}</h1>
                  <h2 className="text-black font-semibold text-sm ">{item.name}</h2>
                </div>
                <h1 className="bg-blue-100 text-blue-500 text-sm font-bold rounded-full px-2">
                  {item.index}
                </h1>
              </div>
            </>
          );
        })}
      </div>
      <hr />
    </>
  );
}
