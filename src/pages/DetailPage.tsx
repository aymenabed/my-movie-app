import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieDetails,
  getMovieCredits,
  getMovieImageUrl,
} from "../services/movieService";

interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

interface CastMember {
  id: number;
  name: string;
  character: string;
}

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (id) {
          const details = await getMovieDetails(parseInt(id));
          setMovieDetails(details);
        }
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    const fetchMovieCredits = async () => {
      try {
        if (id) {
          const credits = await getMovieCredits(parseInt(id));
          setCast(credits.slice(0, 5));
        }
      } catch (error) {
        console.error("Failed to fetch movie credits:", error);
      }
    };

    if (id) {
      fetchMovieDetails();
      fetchMovieCredits();
    }
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      {movieDetails && (
        <div className="flex flex-col items-center w-full">
          <img
            src={getMovieImageUrl(movieDetails.poster_path)}
            alt={movieDetails.title}
            className="max-w-xs w-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">{movieDetails.title}</h1>
          <p className="text-gray-500">{movieDetails.release_date}</p>
          <p className="text-lg mt-4">{movieDetails.overview}</p>
        </div>
      )}
      <h2 className="text-2xl font-bold mt-8">Têtes d'affiche</h2>
      <ul className="mt-4">
        {cast.map((member) => (
          <li key={member.id} className="text-lg text-gray-700">
            {member.name} as {member.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailPage;
