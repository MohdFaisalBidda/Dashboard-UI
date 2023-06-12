import React from "react";
import Card from "../Card";
import AddCard from "../AddCard";
import {BiDotsHorizontal} from "react-icons/bi"

export default function Boards() {
  return (
    <>
      <div className="md:flex m-8 gap-8">
        <div className="w-[25%] px-6 ">
          <div className="flex justify-between mb-8">
            <div className="flex gap-2 items-center">
              <h2>Backlog Tasks</h2>
              <h2 className="bg-yellow-100 text-yellow-600 text-xs font-bold rounded-full px-2">5</h2>
            </div>
            <div>
              <h2 className=""><BiDotsHorizontal className="text-gray-400 text-xl"/></h2>
            </div>
          </div>
          <div className="w-max md:w-min">
            <Card heading={"Modal Answer"} />
            <Card heading={"Create calendar, chat and email app pages"} />
            <Card heading={"Product Design, Figma, Sketch (Software), Prototype"}/>
            <Card heading={"Change email option process"}/>
            <AddCard/>
          </div>
        </div>

        <div className="w-[25%] px-6">
          <div className="flex justify-between mb-8">
            <div className="flex gap-2 items-center">
              <h2>To Do Tasks</h2>
              <h2 className="bg-pink-100 text-pink-600 text-xs font-bold rounded-full px-2">3</h2>
            </div>
            <div>
              <h2><BiDotsHorizontal className="text-gray-400 text-xl"/></h2>
            </div>
          </div>
          <div className="w-max md:w-min ">
            <Card heading={"Modal Answer"}/>
            <Card heading={"Add authentication pages"}/>
            <Card heading={"Profile Page Satructure"}/>
            <Card heading={"Create calendar, chat and email app pages"}/>
            <AddCard/>
          </div>
        </div>
        <div className="w-[25%] px-6">
          <div className="flex justify-between mb-8">
            <div className="flex gap-2 items-center">
              <h2>In Process</h2>
              <h2 className="bg-purple-100 text-purple-600 text-xs font-bold rounded-full px-2">2</h2>
            </div>
            <div>
              <h2><BiDotsHorizontal className="text-gray-400 text-xl"/></h2>
            </div>
          </div>
          <div className="w-max md:w-min ">
            <Card heading={"Modal Answer"}/>
            <Card heading={"Modal Answer"}/>
            <AddCard/>
          </div>
        </div>
        <div className="w-[25%] px-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2 items-center">
              <h2>Done</h2>
              <h2 className="bg-green-100 text-green-600 text-xs font-bold rounded-full px-2">5</h2>
            </div>
            <div>
              <h2><BiDotsHorizontal className="text-gray-400 text-xl"/></h2>
            </div>
          </div>
          <div className="w-max md:w-min ">
            <Card heading={"Modal Answer"}/>
            <Card heading={"Create calendar, chat and email app pages"}/>
            <Card heading={"Product Design, Figma, Sketch (Software), Prototype"}/>
            <Card heading={"Create calendar, chat and email app pages"}/>
            <AddCard/>
          </div>
        </div>
      </div>
    </>
  );
}
