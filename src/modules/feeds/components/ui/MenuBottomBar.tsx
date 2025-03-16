import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser } from "react-icons/fa";

const BottomNavbar = ({ setActiveMenu, activeMenu }: { setActiveMenu: (menu: string) => void, activeMenu: string }) => {
  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "FindJobs", icon: <FaSearch /> },
    { name: "Notifications", icon: <FaBell /> },
    { name: "Messages", icon: <FaEnvelope /> },
    { name: "Profile", icon: <FaUser /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg py-3 px-4 flex justify-between items-center border-t">
      {menuItems.map(({ name, icon }) => (
        <button
          key={name}
          onClick={() => setActiveMenu(name)}
          className={`flex flex-col items-center gap-1 text-sm transition-all duration-300 p-2 ${
            activeMenu === name ? "text-blue-600 font-semibold scale-110" : "text-gray-500 hover:text-black"
          }`}
        >
          <span className="text-lg">{icon}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavbar;
