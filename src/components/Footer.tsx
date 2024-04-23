import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>© {currentYear} FilmFinder. Tous droits réservés.</p>
      <p>Conçu avec ❤ pour les cinéphiles. Par Aymen ABED.</p>
      <p>
        Retrouvez-nous sur{" "}
        <a
          href="https://github.com/aymenabed"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
