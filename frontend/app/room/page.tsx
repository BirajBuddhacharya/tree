import NavBar from "@/components/AppComponents/NavBar";
import Sidebar from "./components/sidebar";
import HeaderAction from "./components/headerAction";
import FilteredRooms from "./components/filteredRooms";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <div className="px-24 py-4 flex gap-4 flex-col sm:flex-row justify-center">
        <Sidebar />
        <div className="flex-1 space-y-4">
          <HeaderAction />
          <FilteredRooms />
        </div>
      </div>
    </div>
  );
}