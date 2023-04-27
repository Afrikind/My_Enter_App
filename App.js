import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import LiveStreaming from './components/LiveStreaming';
import LiveScores from './components/LiveScores';
import Leagues from './components/Leagues';
import About from './components/About';
import Donations from './components/Donations';
import HallOfFame from './components/HallOfFame';
import Music from './components/Music';
import Settings from './components/Settings';
import FantasySports from './components/FantasySports';
import SocialMedia from './components/SocialMedia';
import FitnessTracking from './components/FitnessTracking';
import Navbar from './components/Navbar';
import ScheduleCalendar from './components/ScheduleCalendar';
import NewsAnalysis from './components/NewsAnalysis';
import SportingApp from './components/SportingApp';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('home');
  
  const renderPage = () => {
    switch(page) {
      case 'home':
        return <Home />;
      case 'live-streaming':
        return <LiveStreaming />;
      case 'live-scores':
        return <LiveScores />;
      case 'leagues':
        return <Leagues />;
      case 'About':
        return <About />;
      case 'Donations':
        return <Donations />;
      case 'HallOfFame':
        return <HallOfFame />;
      case 'music':
        return <Music />;
      case 'settings':
        return <Settings />;
      case 'fantasy-sports':
        return <FantasySports />;
      case 'social-media':
        return <SocialMedia />;
      case 'fitness-tracking':
        return <FitnessTracking />;
        case 'navbar':
        return <Navbar />;
      case 'schedule-calendar':
        return <ScheduleCalendar />;
      case 'news-analysis':
        return <NewsAnalysis />;
      case 'sporting-app':
        return <SportingApp />;
      case 'footer':
        return <Footer/>;
      default:
        return <Home />;
    }
  }

  
  return (
    <div className="App">
      <Header setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;
