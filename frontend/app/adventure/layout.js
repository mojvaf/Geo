import Map from "@/_components/Map";
import SideBar from "@/_components/SideBar";

export default function AdventureLayout({ children }) {
  return (
    <div>
      <SideBar />
      {children}
      <Map />
    </div>
  );
}
