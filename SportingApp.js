import React, { useState, useEffect } from 'react';

function SportingApp() {
  const [user, setUser] = useState(null);
  const [liveScores, setLiveScores] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState(null);

  useEffect(() => {
    // Fetch user data from API
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));

    // Fetch live scores from API
    fetch('/api/live-scores')
      .then(response => response.json())
      .then(data => setLiveScores(data));

    // Fetch list of leagues from API
    fetch('/api/leagues')
      .then(response => response.json())
      .then(data => setLeagues(data));
  }, []);

  const handleLeagueSelect = (league) => {
    setSelectedLeague(league);
  }

  return (
    <div className="App">
      <header>
        <h1>Welcome to My Sports App</h1>
        {user && <p>Logged in as: {user.name}</p>}
      </header>
      <nav>
        <ul>
          <li><a href="#live-streaming">Live Streaming</a></li>
          <li><a href="#live-scores">Live Scores</a></li>
          <li>
            <a href="#leagues">Leagues</a>
            <ul>
              {leagues.map(league => (
                <li key={league.id}>
                  <button onClick={() => handleLeagueSelect(league)}>{league.name}</button>
                </li>
              ))}
            </ul>
          </li>
          <li><a href="#music">Music</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
      <main>
        {selectedLeague ? (
          <div>
            <h2>{selectedLeague.name}</h2>
            <p>{selectedLeague.description}</p>
            <h3>Last Matches</h3>
            <ul>
              {/* Display last matches for selected league */}
            </ul>
          </div>
        ) : (
          <div>
            <h2>Live Scores</h2>
            <ul>
              {liveScores.map(score => (
                <li key={score.id}>
                  <p>{score.team1} vs {score.team2}</p>
                  <p>{score.score}</p>
                  <button>View Details</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <footer>
        <p>&copy; My Sports App 2023</p>
      </footer>
    </div>
  );
}

export default SportingApp;
