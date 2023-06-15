import React from "react";
import Card from "../Card";
import AddCard from "../AddCard";
import { BiDotsHorizontal } from "react-icons/bi";
import avatar1 from "../../../../public/avatar-1.jpg";
import avatar2 from "../../../../public/avatar-2.webp";
import avatar3 from "../../../../public/avatar-3.webp";
import Image from "next/image";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";

export default function Boards() {
  const icon1 = (
    <Image
      alt="avatar1"
      className=" object-cover rounded-full w-8 h-8  border-white border-2 "
      src={avatar1}
    />
  );

  const icon2 = (
    <Image
      alt="avatar2"
      className="absolute object-cover rounded-full w-8 h-8 border-white border-2 ml-10"
      src={avatar2}
    />
  );

  const icon3 = (
    <p className="bg-purple-50 text-purple-600 text-xs font-normal rounded-full flex items-center justify-center  w-8 h-8 absolute ml-20">
      +3
    </p>
  );

  const checkedIcon = (
    <>
      <p>
        <BsFileEarmarkCheckFill className="text-lg text-blue-400" />
      </p>
      <p>4</p>
    </>
  );

  const fileIcon = (
    <>
      <p>
        <FaFileUpload className="text-purple-400 text-base" />
      </p>
      <p>2</p>
    </>
  );
  const messageIcon = (
    <>
      <p>
        <RiMessage2Fill className="text-yellow-400 text-lg" />
      </p>
      <p>4</p>
    </>
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-[24px] px-[16px] pb-[28px] md:grid-cols-2 md:px-[36px] xl:grid-cols-4">
        <div className="mt-8">
          <div className="flex justify-between gap-2 items-center">
            <div className="flex gap-2 items-center">
              <h2 className="text-sm font-medium">Backlog Tasks</h2>
              <h2 className="bg-yellow-100 text-yellow-600 text-xs font-bold rounded-full px-2">
                5
              </h2>
            </div>
            <div className="flex  gap-4">
              <h2 className="">
                <BiDotsHorizontal className="text-gray-400 text-xl" />
              </h2>
            </div>
          </div>
          <div className="">
            <Card
              heading={"Modal Answer"}
              tag1={"#UI007"}
              tag2={"Design"}
              tag3={"Backlog"}
              tagColor={"text-yellow-600"}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              checkedIcon={checkedIcon}
              fileIcon={fileIcon}
              messageIcon={messageIcon}
            />
            <Card
              heading={"Create calendar, chat and email app pages"}
              tag1={"#UI007"}
              tag2={"Development"}
              tag3={"Backlog"}
              tagColor={"text-yellow-600"}
              tagBg={"bg-yellow-100"}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              checkedIcon={checkedIcon}
              fileIcon={fileIcon}
              messageIcon={messageIcon}
            />
            <Card
              heading={"Product Design, Figma, Sketch (Software), Prototype"}
              tag1={"#UI007"}
              tag2={"Project"}
              tag3={"Backlog"}
              tagColor={"text-yellow-600"}
              tagBg={"bg-yellow-100"}
              icon1={icon1}
              checkedIcon={checkedIcon}
              fileIcon={fileIcon}
              messageIcon={messageIcon}
            />
            <Card
              heading={"Change email option process"}
              tag1={"#FTC07"}
              tag3={"Backlog"}
              tagColor={"text-yellow-600"}
              tagBg={"bg-yellow-100"}
              icon1={icon1}
              icon2={icon2}
              checkedIcon={checkedIcon}
              fileIcon={fileIcon}
              messageIcon={messageIcon}
            />
            <Card
              heading={"Post launch reminder/ Post list"}
              tag1={"#FTC07"}
              tag3={"Backlog"}
              tagColor={"text-yellow-600"}
              tagBg={"bg-yellow-100"}
            />
            <AddCard />
          </div>
        </div>

        <div className="">
          <div className="flex justify-between my-8">
            <div className="flex gap-2 items-center">
              <h2 className="text-sm font-medium">To Do Tasks</h2>
              <h2 className="bg-pink-100 text-pink-600 text-xs font-bold rounded-full px-2">
                3
              </h2>
            </div>
            <div>
              <h2>
                <BiDotsHorizontal className="text-gray-400 text-xl" />
              </h2>
            </div>
          </div>
          <div className="">
            <Card
              heading={"Modal Answer"}
              tag1={"#UI007"}
              tag2={"Design"}
              tag3={"ToDo"}
              tagColor={"text-pink-600"}
              tagBg={"bg-pink-100"}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              checkedIcon={checkedIcon}
              fileIcon={fileIcon}
              messageIcon={messageIcon}
            />
            <Card
              heading={"Add authentication pages"}
              tag1={"#FTC55"}
              tag3={"ToDo"}
              tagColor={"text-pink-600"}
              tagBg={"bg-pink-100"}
            />
            <Card
              heading={"Profile Page Satructure"}
              tag1={"#FTC55"}
              tag3={"ToDo"}
              tagColor={"text-pink-600"}
              tagBg={"bg-pink-100"}
            />
            <Card
              heading={"Create calendar, chat and email app pages"}
              tag1={"#FTC55"}
              tag3={"ToDo"}
              tagColor={"text-pink-600"}
              tagBg={"bg-pink-100"}
              icon1={icon1}
              icon2={icon2}
              checkedIcon={checkedIcon}
              fileIcon={fileIcon}
              messageIcon={messageIcon}
            />
            <AddCard />
          </div>
        </div>
        <div className="">
          <div className="flex justify-between my-8">
            <div className="flex gap-2 items-center">
              <h2 className="text-sm font-medium">In Process</h2>
              <h2 className="bg-purple-100 text-purple-600 text-xs font-bold rounded-full px-2">
                2
              </h2>
            </div>
            <div>
              <h2>
                <BiDotsHorizontal className="text-gray-400 text-xl" />
              </h2>
            </div>
          </div>
          <div className="">
            <Card
              heading={"Modal Answer"}
              tag1={"#UI007"}
              tag2={"Design"}
              tag3={"In Process"}
              tagColor={"text-purple-600"}
              tagBg={"bg-purple-100"}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              checkedIcon={checkedIcon}
              fileIcon={fileIcon}
              messageIcon={messageIcon}
            />
            <Card
              heading={"Modal Answer"}
              tag1={"#FTC55"}
              tag3={"In Process"}
              tagColor={"text-purple-600"}
              tagBg={"bg-purple-100"}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              checkedIcon={checkedIcon}
              fileIcon={fileIcon}
              messageIcon={messageIcon}
            />
            <AddCard />
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center my-8">
            <div className="flex gap-2 items-center">
              <h2 className="text-sm font-medium">Done</h2>
              <h2 className="bg-green-100 text-green-600 text-xs font-bold rounded-full px-2">
                5
              </h2>
            </div>
            <div>
              <h2>
                <BiDotsHorizontal className="text-gray-400 text-xl" />
              </h2>
            </div>
          </div>
          <div className="mb-8">
            <Card
              heading={"Modal Answer"}
              tag1={"#UI007"}
              tag3={"Done"}
              tagColor={"text-green-600 "}
              tagBg={"bg-green-100"}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
            />
            <Card
              heading={"Create calendar, chat and email app pages"}
              tag1={"#UI007"}
              tag3={"Done"}
              tagColor={"text-green-600 "}
              tagBg={"bg-green-100"}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
            />
            <Card
              heading={"Product Design, Figma, Sketch (Software), Prototype"}
              tag1={"#UI007"}
              tag3={"Done"}
              tagColor={"text-green-600 "}
              tagBg={"bg-green-100"}
              icon1={icon1}
            />
            <Card
              heading={"Create calendar, chat and email app pages"}
              tag1={"#UI007"}
              tag3={"Done"}
              tagColor={"text-green-600 "}
              tagBg={"bg-green-100"}
              icon1={icon1}
              icon2={icon2}
            />
            <Card
              heading={"Create calendar, chat and email app pages"}
              tag1={"#UI007"}
              tag3={"Done"}
              tagColor={"text-green-600 "}
              tagBg={"bg-green-100"}
            />
            <AddCard />
          </div>
        </div>
      </div>
    </>
  );
}
