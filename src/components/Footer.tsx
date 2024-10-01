// src/components/Footer.tsx

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 p-4 text-center mt-10">
      <p>&copy; {new Date().getFullYear()} Iris Li. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
