import Image from "next/image";
import React from "react";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import profile from "../../../public/profile.jpg";
import { IoMdAddCircleOutline } from "react-icons/io";
import avatar1 from "../../../public/avatar-1.jpg";
import avatar2 from "../../../public/avatar-2.webp";
import avatar3 from "../../../public/avatar-3.webp";
import avatar4 from "../../../public/avatar-4.webp";

export default function Card({
  heading,
  tag1,
  tag2,
  tag3,
  tagColor,
  tagBg,
  icon1,
  icon2,
  icon3,
  checkedIcon,
  fileIcon,
  messageIcon,
}) {
  return (
    <div className="flex flex-col gap-3 p-3 h-32 my-5 rounded-lg bg-white border border-gray-100 drop-shadow-sm">
      {/* first */}
      <div className="flex items-start gap-2 justify-between">
        <h1 className="text-xs font-semibold">{heading}</h1>
        <div className=" flex gap-2 text-xs">{checkedIcon}</div>
      </div>
      {/* second */}
      <div className="flex items-center gap-1 text-[9px] mt-3 font-semibold">
        <p className="bg-white text-gray-900 border px-2 border-gray-200 rounded-full">
          {tag1}
        </p>
        <p className="bg-blue-100 text-blue-500 border rounded-full">{tag2}</p>
        <p
          className={`${tagColor} ${tagBg} border border-gray-200 rounded-full`}
        >
          {tag3}
        </p>
      </div>
      {/* third */}
      <div className="flex items-center gap-2 justify-between text-sm">
        <div className="flex relative justify-center items-center">
          {icon1}
          {icon2}
          {icon3}
          <IoMdAddCircleOutline
            className={`${
              !icon1 && !icon2 & !icon3 ? "xl:ml-16 ml-6" : "ml-36"
            } ${!icon2 && !icon3 ? "xl:mr-8  ml-20" : ""} ${
              !icon3 ? "xl:ml-24 " : ""
            } ${
              icon1 && !icon2 && !icon3 ? "ml-16" : ""
            }  absolute xl:ml-36  text-xl text-gray-300
            `
          }
          />
        </div>
        <div className="flex items-center gap-1.5">
          {fileIcon}
          {messageIcon}
        </div>
      </div>
    </div>
  );
}
