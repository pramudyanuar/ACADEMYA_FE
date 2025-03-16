import { useState } from "react";
import MenuSideBar from "../components/ui/MenuSidebar";
import Navbar from "../components/ui/Navbar";
import ProfileSidebar from "../components/ui/ProfileSidebar";
import Notifications from "../components/ui/Notifications";
import Messages from "../components/ui/Messages";
import Premium from "../components/ui/Premium";
import Settings from "../components/ui/Settings";
import JobFeed from "../components/ui/JobFeeds";
import BottomNavbar from "../components/ui/MenuBottomBar";

const FeedsPage = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const renderSidebarContent = () => {
    switch (activeMenu) {
      case "Home":
        return <Notifications />;
      case "FindJobs":
        return <JobFeed />;
      case "Notifications":
        return <Notifications />;
      case "Messages":
        return <Messages />;
      case "Premium":
        return <Premium />;
      case "Settings":
        return <Settings />;
      default:
        return <ProfileSidebar />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="flex h-full">
        {/* Sidebar */}
        <div className="hidden md:block w-64 h-full p-4 fixed left-0 top-16">
          <MenuSideBar setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-64 md:mt-14 p-6 overflow-auto">
          {renderSidebarContent()}
        </div>
      </div>
      <div className="md:hidden">
        <BottomNavbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </div>
  );
};

export default FeedsPage;
