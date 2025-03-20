import FeedsPostPage from "../components/ui/PostPage";
import ProfileSidebar from "../components/ui/ProfileSidebar";

const HomePage = () => {
  return (
    <div className="flex flex-row p-4 bg-white shadow-md rounded-lg h-[calc(100vh-115px)]  ">
      <div className="flex-grow overflow-auto">
        <FeedsPostPage />
      </div>
      <div className="w-84 h-full overflow-hidden hidden md:block">
        <ProfileSidebar />
      </div>
    </div>
  );
};

export default HomePage;
