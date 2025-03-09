const posts = [
  {
    id: 1,
    user: "John Doe",
    avatar: "https://picsum.photos/200/300",
    content: "Just had an amazing day! ☀️",
    time: "2h ago",
  },
  {
    id: 2,
    user: "Jane Smith",
    avatar: "https://picsum.photos/200/300",
    content: "Working on a new project. Stay tuned! 💻",
    time: "5h ago",
  },
];

const FeedsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Feeds</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Post</button>
      </nav>

      {/* Main Content */}
      <div className="flex justify-center mt-4">
        <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
          {posts.map((post) => (
            <div key={post.id} className="border-b border-gray-300 dark:border-gray-700 py-4">
              <div className="flex items-center gap-3">
                <img src={post.avatar} alt={post.user} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{post.user}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{post.time}</p>
                </div>
              </div>
              <p className="mt-2 text-gray-900 dark:text-gray-300">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedsPage;