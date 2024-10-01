import Link from "next/link";

const PostsPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Blog Posts
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Dive into my latest articles on AI, Machine Learning, and more!
        </p>

        <div className="p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700">
          <ul className="space-y-4">
            <li>
              <Link href="/posts/understanding-ai" className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200">
                <h2 className="text-xl font-semibold text-blue-400">Understanding AI</h2>
                <p className="text-gray-300">An in-depth look at artificial intelligence and its applications.</p>
              </Link>
            </li>
            <li>
              <Link href="/posts/getting-started-with-ml" className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200">
                <h2 className="text-xl font-semibold text-blue-400">Getting Started with ML</h2>
                <p className="text-gray-300">A beginner&apos;s guide to machine learning concepts and tools.</p>
              </Link>
            </li>
            {/* Add more posts as needed */}
          </ul>
        </div>


      </div>
    </main>
  );
};

export default PostsPage;
