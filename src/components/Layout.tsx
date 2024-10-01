// src/components/Layout.tsx
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Minimalist Tech Blog</h1>
        <p className="text-gray-600">Documenting my journey in technology and programming</p>
      </header>
      <main>{children}</main>
      <footer className="text-center mt-8 text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
