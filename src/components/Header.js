import React from 'react';

function Header({ setPage }) {
  return (
    <nav>
      <ul>
        <li><button onClick={() => setPage('/')}>Home</button></li>
        <li>
          {/* <button onClick={() => setPage('live-streaming')}>
            Live Streaming
          </button> */}
        </li>
        <li>
          <button onClick={() => setPage('HallOfFame')}>
            Hall of Fame
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
