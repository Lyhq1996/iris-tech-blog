// src/app/page.tsx
import Link from 'next/link';
import Layout from '@/components/Layout';

const Home = () => {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Welcome to My Blog</h2>
      <p>This is a minimalist tech blog. Check out my posts below!</p>
      <Link href="/posts">
        <a className="text-blue-500 underline">Go to Blog Posts</a>
      </Link>
    </Layout>
  );
};

export default Home;
