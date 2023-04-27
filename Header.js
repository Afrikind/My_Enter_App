import React from 'react';

function Header({ setPage }) {
  return (
    <nav>
      <ul>
        <li><button onClick={() => setPage('home')}>Home</button></li>
        <li>
          <button onClick={() => setPage('live-streaming')}>
            Live Streaming
          </button>
        </li>
        <li>
          <button onClick={() => setPage('live-scores')}>
            Live Scores
          </button>
        </li>
        <li>
          <button onClick={() => setPage('leagues')}>
            Leagues
          </button>
        </li>
        <li>
          <button onClick={() => setPage('music')}>
            Music
          </button>
        </li>
        <li>
          <button onClick={() => setPage('settings')}>
            Settings
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
