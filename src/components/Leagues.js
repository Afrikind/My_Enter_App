import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  "./module.css";

function Leagues() {
  const [leagues, setLeagues] = useState([
    { id: 1, name: "Premier League", logo: "https://via.placeholder.com/150" },
    { id: 2, name: "La Liga", logo: "https://via.placeholder.com/150" },
    { id: 3, name: "Bundesliga", logo: "https://via.placeholder.com/150" },
    { id: 4, name: "Serie A", logo: "https://via.placeholder.com/150" },
    { id: 5, name: "Ligue 1", logo: "https://via.placeholder.com/150" },
  ]);

  
  const handleInputChange = (event) => {
    setLeagues(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Leagues.trim() !== '') {
      setLeagues([...Leagues, Leagues.trim()]);
      setLeagues('');
    }
  };

  return (
    <div className="leagues">
      <h2>Leagues</h2>
      <ul>
        {leagues.map((league) => (
          <li key={league.id}>
            <Link to={`/leagues/${league.id}`}>
              <img src={league.logo} alt={league.name} />
              <span>{league.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleInputChange}>Check</button>
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}

export default Leagues;
