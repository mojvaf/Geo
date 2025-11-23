import Map from "@/_components/Map";
import SideBar from "@/_components/SideBar";

export default function AdventureLayout({ children }) {
  return (
    <div className="bg-primary-800 h-[calc(100vh-5.1rem)] p-[1.2rem] overscroll-y-none flex relative md:flex-row gap-2">
      <div className="w-full md:w-[40%] flex flex-col items-center overflow-y-auto min-h-0">
        <SideBar />
        {children}
      </div>
      <div className="w-full md:flex-1 h-[60vh] md:h-full relative">
        <Map />
      </div>
    </div>
  );
}
