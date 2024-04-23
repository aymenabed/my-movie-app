import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { id, title, poster_path, release_date } = movie;

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}>
      <Link to={`/details/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} style={{ maxWidth: '100%' }} />
      </Link>
      <h2>{title}</h2>
      <p>{release_date}</p>
    </div>
  );
};

export default MovieCard;
