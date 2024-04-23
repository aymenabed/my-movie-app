import React, { useState } from 'react';
import { useSearch } from '../contexts/SearchContext';
import { searchMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';

const SearchPage: React.FC = () => {
  const { searchParams, setSearchParams } = useSearch();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchForm, setSearchForm] = useState(searchParams);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchForm({ ...searchForm, [name]: value });
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(searchForm);
    try {
      const results = await searchMovies(searchForm);
      setSearchResults(results);
    } catch (error) {
      console.error('Failed to search movies:', error);
    }
  };

  const handleReset = () => {
    setSearchForm({
      title: '',
      genre: '',
      actor: '',
      director: '',
      year: '',
    });
    setSearchResults([]);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block mb-1">Title:</label>
            <input type="text" id="title" name="title" value={searchForm.title} onChange={handleInputChange} className="border rounded-md px-3 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="genre" className="block mb-1">Genre:</label>
            <input type="text" id="genre" name="genre" value={searchForm.genre} onChange={handleInputChange} className="border rounded-md px-3 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="actor" className="block mb-1">Actor:</label>
            <input type="text" id="actor" name="actor" value={searchForm.actor} onChange={handleInputChange} className="border rounded-md px-3 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="director" className="block mb-1">Director:</label>
            <input type="text" id="director" name="director" value={searchForm.director} onChange={handleInputChange} className="border rounded-md px-3 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="year" className="block mb-1">Year:</label>
            <input type="text" id="year" name="year" value={searchForm.year} onChange={handleInputChange} className="border rounded-md px-3 py-2 w-full" />
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Search</button>
          <button type="button" onClick={handleReset} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Reset</button>
        </div>
      </form>
      <div className="grid grid-cols-3 gap-4">
        {searchResults.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
