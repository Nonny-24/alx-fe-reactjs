import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const SearchForm = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, repos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded-md shadow-md"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded w-full md:w-1/3"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border rounded w-full md:w-1/3"
      />
      <input
        type="number"
        placeholder="Minimum Repos"
        value={repos}
        onChange={(e) => setRepos(e.target.value)}
        className="p-2 border rounded w-full md:w-1/3"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default Search;