import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-5xl font-bold mb-4">404 - Page non trouvée</h1>
            <p className="text-lg mb-4">Désolé, la page que vous recherchez n'existe pas.</p>
            <Link to="/" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Retour à l'accueil
            </Link>
        </div>
    );
}

export default NotFoundPage;
