import React, { useState } from "react";
import './module.css';

const FantasySports = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: "Team A", points: 30 },
    { id: 2, name: "Team B", points: 20 },
    { id: 3, name: "Team C", points: 40 },
    { id: 4, name: "Team D", points: 25 },
  ]);

  const handleAddTeam = () => {
    const newTeamId = teams.length + 1;
    const newTeam = { id: newTeamId, name: `Team ${newTeamId}`, points: 0 };
    setTeams([...teams, newTeam]);
  };

  const handleRemoveTeam = (teamId) => {
    const updatedTeams = teams.filter((team) => team.id !== teamId);
    setTeams(updatedTeams);
  };

  const handleIncrementPoints = (teamId) => {
    const updatedTeams = teams.map((team) =>
      team.id === teamId ? { ...team, points: team.points + 1 } : team
    );
    setTeams(updatedTeams);
  };

  const handleDecrementPoints = (teamId) => {
    const updatedTeams = teams.map((team) =>
      team.id === teamId && team.points > 0
        ? { ...team, points: team.points - 1 }
        : team
    );
    setTeams(updatedTeams);
  };

  return (
    <div className="fantasy-sports">
      <h2>Fantasy Sports</h2>
      <div className="teams-container">
        {teams.map((team) => (
          <div className="team" key={team.id}>
            <p className="team-name">{team.name}</p>
            <p className="team-points">{team.points}</p>
            <div className="team-buttons">
              <button
                className="increment-button"
                onClick={() => handleIncrementPoints(team.id)}
              >
                +
              </button>
              <button
                className="decrement-button"
                onClick={() => handleDecrementPoints(team.id)}
              >
                -
              </button>
              <button
                className="remove-button"
                onClick={() => handleRemoveTeam(team.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-team-button" onClick={handleAddTeam}>
        Add Team
      </button>
    </div>
  );
};

export default FantasySports;
