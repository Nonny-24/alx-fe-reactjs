import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchCriteria = [
      { key: "username", value: username.trim() },
      { key: "location", value: location.trim() },
      { key: "repos", value: repos.trim() },
    ].filter((item) => item.value); 

    if (searchCriteria.length) {
      const queryString = searchCriteria
        .map((item) => `${item.key}:${item.value}`)
        .join(" ");

      const response = await fakeApiCall(queryString);
      onSearch(response);
    }
  };

  const fakeApiCall = async (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          message: `Results for: ${query}`,
        });
      }, 1000);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1" htmlFor="username">
          Username:
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1" htmlFor="location">
          Location:
        </label>
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1" htmlFor="repos">
          Minimum Repos:
        </label>
        <input
          id="repos"
          type="number"
          placeholder="e.g., 10"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default Search;