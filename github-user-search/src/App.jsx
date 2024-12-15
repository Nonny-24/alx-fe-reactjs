import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we can't find the user.</p>}
        {userData && (
          <div>
            <img src={userData.avatar_url} alt={`${userData.login} avatar`} width="100" />
            <h2>{userData.login}</h2>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              Visit Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
