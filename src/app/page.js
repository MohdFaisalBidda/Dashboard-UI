"use client"
import { useState } from "react";
import TopBar from "./components/Contents/TopBar";
import SideBar from "./components/LeftHeader/LeftHeader";
import RightHeader from "./components/RightHeader/RightHeader";

export default function Home() {
  const [modal,setModal]=useState(false);
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#F7F8FA] lg:flex-row">
        <SideBar modal={modal} setModal={setModal}/>
        <TopBar modal={modal} setModal={setModal}/>
        <RightHeader />
      </div>
    </>
  );
}
