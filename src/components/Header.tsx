// src/components/Header.tsx

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <h1 className="text-3xl font-bold">Iris Tech Blog</h1>
      <nav>
        <ul className="flex space-x-4 mt-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/posts" className="hover:underline">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
