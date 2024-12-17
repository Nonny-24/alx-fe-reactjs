import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="mt-4 p-4 bg-white rounded shadow">
      {results.length > 0 ? (
        results.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-2 border-b"
          >
            <div>
              <h2 className="font-bold">{user.login}</h2>
              <p>Location: {user.location || "N/A"}</p>
              <p>Repos: {user.public_repos || "N/A"}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-16 h-16 rounded-full"
            />
          </div>
        ))
      ) : (
        <p>No results found. Please refine your search criteria.</p>
      )}
    </div>
  );
};

export default SearchResults;