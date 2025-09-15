import Map from "@/_components/Map";
import SideBar from "@/_components/SideBar";

export default function AdventureLayout({ children }) {
  return (
    <div className="bg-primary-800 flex flex-col md:flex-row h-[calc(100vh-5.1rem)]">
      <div className="w-full md:w-[40%] bg-primary-800 px-6 py-4 flex flex-col items-center">
        <SideBar />
        {children}
      </div>
      <div className="w-full md:w-[60%] h-full md:h-screen">
        <Map />
      </div>
    </div>
  );
}
