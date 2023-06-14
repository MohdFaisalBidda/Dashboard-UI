import React from "react";
import Card from "../Card";
import AddCard from "../AddCard";
import { BiDotsHorizontal } from "react-icons/bi";

export default function Boards() {
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
            <Card heading={"Modal Answer"}  tag1={"#UI007"} tag2={"Design"} tag3={"Backlog"}/>
            <Card heading={"Create calendar, chat and email app pages"} tag1={"#UI007"} tag2={"Development"} tag3={"Backlog"} />
            <Card
              heading={"Product Design, Figma, Sketch (Software), Prototype"}
              tag1={"#UI007"} tag2={"Project"} tag3={"Backlog"}
            />
            <Card heading={"Change email option process"} tag1={"#FTC07"}  tag3={"Backlog"} />
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
            <Card heading={"Modal Answer"} tag1={"#UI007"} tag2={"Design"} tag3={"ToDo"}/>
            <Card heading={"Add authentication pages"} tag1={"#FTC55"} tag3={"ToDo"}/>
            <Card heading={"Profile Page Satructure"}  tag1={"#FTC55"} tag3={"ToDo"} />
            <Card heading={"Create calendar, chat and email app pages"}  tag1={"#FTC55"} tag3={"ToDo"}/>
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
            <Card heading={"Modal Answer"} tag1={"#UI007"} tag2={"Design"} tag3={"In Process"}/>
            <Card heading={"Modal Answer"} tag1={"#FTC55"} tag3={"In Process"}/>
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
            <Card heading={"Modal Answer"} tag1={"#UI007"} tag3={"Done"}/>
            <Card heading={"Create calendar, chat and email app pages"} tag1={"#UI007"} tag3={"Done"}/>
            <Card
              heading={"Product Design, Figma, Sketch (Software), Prototype"}
              tag1={"#UI007"} tag3={"Done"}
            />
            <Card heading={"Create calendar, chat and email app pages"} tag1={"#UI007"} tag3={"Done"}/>
            <AddCard />
          </div>
        </div>
      </div>
    </>
  );
}
