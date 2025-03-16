const ProfileSidebar = () => {
  return (
    <div className="hidden shadow-md rounded-lg lg:flex flex-col w-80" style={{ height: 'calc(100vh - 50px)' }}>
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <h2 className="mt-2 text-lg font-semibold">Alexa Rawles</h2>
        <p className="text-sm text-gray-500">Senior Frontend Developer</p>
        <div className="mt-3 flex space-x-2 text-sm text-gray-600">
          <p><strong>143</strong> Profile Views</p>
          <p><strong>28</strong> Search Appearances</p>
          <p><strong>7</strong> Applications</p>
        </div>
        <div className="mt-3 flex space-x-2">
          <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">React</span>
          <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">TypeScript</span>
          <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Next.js</span>
        </div>
        <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
          View Full Profile
        </button>
      </div>

      {/* Article Section */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg">Article Tren</h3>
        <div className="mt-3 space-y-3">
          <div className="flex space-x-3">
            <img src="/article1.jpg" alt="Article" className="w-16 h-16 rounded-md object-cover"/>
            <div>
              <p className="text-sm font-semibold">Mastering TypeScript: Why Every JavaScript Developer Should Learn It</p>
              <p className="text-xs text-gray-500">Alex Lee - Last night</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img src="/article2.jpg" alt="Article" className="w-16 h-16 rounded-md object-cover"/>
            <div>
              <p className="text-sm font-semibold">Remote Work in 2025: The Future of Hybrid Offices</p>
              <p className="text-xs text-gray-500">Salma - 4h ago</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img src="/article3.jpg" alt="Article" className="w-16 h-16 rounded-md object-cover"/>
            <div>
              <p className="text-sm font-semibold">Breaking into Tech: A Guide for Career Changers</p>
              <p className="text-xs text-gray-500">Zara - 1h ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Connections Section */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg">Connections</h3>
        <div className="mt-3 space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-semibold">Sarah Johnson</p>
              <p className="text-xs text-gray-500">UX Designer at CreativeLabs</p>
            </div>
            <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md">Connect</button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-semibold">Michael Chen</p>
              <p className="text-xs text-gray-500">Software Engineer at TechGiant</p>
            </div>
            <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md">Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
