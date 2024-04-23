import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          FilmFinder
        </Link>
        <div>
          <Link to="/" className="px-4 hover:text-gray-300">
            Accueil
          </Link>
          <Link to="/search" className="px-4 hover:text-gray-300">
            Recherche
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
