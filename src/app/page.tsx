import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Welcome to Iris Tech Blog
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Embark on an exploration of AI, Machine Learning, and cutting-edge Web Development!
        </p>

        <div className="mt-8 p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700 transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-4xl font-semibold mb-4 text-blue-400">Recent Posts</h2>
          <ul className="list-disc ml-5 mt-2 space-y-2">
            <li>
              <Link href="/posts" className="text-blue-300 hover:text-blue-500 transition duration-200">
                Understanding AI
              </Link>
            </li>
            <li>
              <Link href="/posts" className="text-blue-300 hover:text-blue-500 transition duration-200">
                Getting Started with ML
              </Link>
            </li>
          </ul>
        </div>

        {/* <footer className="mt-12 text-gray-400">
          <p>© {new Date().getFullYear()} Iris Li. All rights reserved.</p>
        </footer> */}
      </div>
    </main>
  );
};

export default HomePage;
