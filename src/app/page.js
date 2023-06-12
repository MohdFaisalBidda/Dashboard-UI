import TopBar from "./components/Contents/TopBar";
import SideBar from "./components/LeftHeader/LeftHeader";
import RightHeader from "./components/RightHeader/RightHeader";

export default function Home() {
  return (
    <>
    <div className="flex">
      <SideBar />
      <TopBar/>
      <RightHeader/>
    </div>
    </>
  );
}
