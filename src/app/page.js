"use client";
import { useEffect, useState } from "react";
import TopBar from "./components/Contents/TopBar";
import SideBar from "./components/LeftHeader/LeftHeader";
import RightHeader from "./components/RightHeader/RightHeader";
import { BiLoaderAlt } from "react-icons/bi";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1500);
    setLoad(false);
    return () => {
      clearTimeout(1500);
    };
  }, []);
  return (
    <>
      {!load ? (
        <div className="flex justify-center items-center h-screen"><BiLoaderAlt className="text-4xl  animate-spin"/></div>
      ) : (
        <div className="flex min-h-screen flex-col bg-[#F7F8FA] lg:flex-row">
          <SideBar modal={modal} setModal={setModal} />
          <TopBar modal={modal} setModal={setModal} />
          <RightHeader />
        </div>
      )}
    </>
  );
}
