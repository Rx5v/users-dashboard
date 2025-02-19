import { Outlet } from "react-router-dom";
import { SidebarMenu } from "../ui/sidebar/SidebarMenu";
import { Sidebar } from "../ui/sidebar";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar>
          <SidebarMenu />
      </Sidebar>
        
      {/* Main Content */}
      <main className="flex-1 p-2 h-screen">
        <div className="bg-white p-4 rounded-xl overflow-auto h-full border-1 border-solid border-gray-300">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
