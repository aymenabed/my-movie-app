
import React from 'react';
import { Link } from 'react-router-dom';
import ImageHome from '../assets/images/ImageHome.jpg';

const HomePage: React.FC = () => {
    return (
        <div className="home-container bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Bienvenue sur FilmFinder</h1>
            <p className="text-xl text-gray-700 mb-4">Votre plateforme ultime pour découvrir des films.</p>
            <Link to="/search" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                Commencer la recherche
            </Link>
            <img src={ImageHome} alt="Featured Film" className="mt-8 rounded shadow-lg" style={{ width: '600px', height: '300px' }}/>
        </div>
    );
}

export default HomePage;
