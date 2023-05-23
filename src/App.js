//import React, { useState } from 'react';
import { Routes, Route, Link} from "react-router-dom";
import './App.css';
//import Header from './components/Header';
import Home from './components/Home';
//import LiveScores from './components/LiveScores';
import Leagues from './components/Leagues';
//import About from './components/About';
import Donations from './components/Donations';
import HallOfFame from './components/HallOfFame';
//import Music from './components/Music';
import Settings from './components/Settings';
// import FantasySports from './components/FantasySports';
// import SocialMedia from './components/SocialMedia';
// import FitnessTracking from './components/FitnessTracking';
// import Navbar from './components/Navbar';
// import ScheduleCalendar from './components/ScheduleCalendar';
// import NewsAnalysis from './components/NewsAnalysis';
// import SportingApp from './components/SportingApp';
// import Footer from './components/Footer';

function App() {
  // const renderPage = () => {
  //   switch(page) {
  //     case '/':
  //       return <Home />;
  //     case 'live-scores':
  //       return <LiveScores />;
  //     case 'leagues':
  //       return <Leagues />;
  //     case 'About':
  //       return <About />;
  //     case 'Donations':
  //       return <Donations />;
  //     case 'HallOfFame':
  //       return <HallOfFame />;
  //     case 'music':
  //       return <Music />;
  //     case 'settings':
  //       return <Settings />;
  //     case 'fantasy-sports':
  //       return <FantasySports />;
  //     case 'social-media':
  //       return <SocialMedia />;
  //     case 'fitness-tracking':
  //       return <FitnessTracking />;
  //       case 'navbar':
  //       return <Navbar />;
  //     case 'schedule-calendar':
  //       return <ScheduleCalendar />;
  //     case 'news-analysis':
  //       return <NewsAnalysis />;
  //     case 'sporting-app':
  //       return <SportingApp />;
  //     case 'footer':
  //       return <Footer/>;
  //     default:
  //       return <Home />;
  //   }
  // }

  return (
    <div className="App">
      <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><a href="">Livestreaming</a></li>  */}
          <li><Link to="/hall">Hall of Fame</Link></li>
          <li><Link to="/league">Leagues</Link></li>
          <li><Link to="/donations">Donations</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hall" element={<HallOfFame/>} />
      <Route path="/league" element={<Leagues/>} />
      <Route path="/donations" element={<Donations/>} />
      <Route path="/settings" element={<Settings/>} />
    </Routes>
    </div>
  );
}

export default App;