import { Link } from "react-router-dom";
import { FaGhost } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 shadow-2xl text-center max-w-md w-full text-white animate-fadeIn">
        <div className="text-7xl mb-4 text-pink-400 drop-shadow-glow animate-bounce">
          <FaGhost />
        </div>
        <h1 className="text-5xl font-bold mb-2 text-white/90">404</h1>
        <p className="text-lg text-white/70 mb-6">
          Oops! That page is lost in the void.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
        >
          🏠 Take Me Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
