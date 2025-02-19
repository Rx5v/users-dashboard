import { Outlet } from "react-router-dom";
import { SidebarMenu } from "../ui/sidebar/SidebarMenu";
import { Sidebar } from "../ui/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "../../store/sidebarSlice";
import { PanelsTopLeft } from "lucide-react";

const MainLayout = () => {

  const dispatch = useDispatch()
  const { open } = useSelector((state) => state.sidebar);

  return (
    <div className="flex h-screen bg-gray-100 justify-end">
      {/* Sidebar */}
      <Sidebar>
          <SidebarMenu />
      </Sidebar>
        
      {/* Main Content */}
      <main className="p-2 w-full h-screen overflow-x-hidden transition-all duration-100 ease-in-out">
        <div className="bg-white p-4 rounded-xl overflow-auto h-full border-1 border-solid border-gray-300">
          <button onClick={() => dispatch(showSidebar(!open))}><PanelsTopLeft /></button>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
