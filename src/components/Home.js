import React from 'react';
import styles from './module.css';
import { Link } from 'react-router-dom';
import { Routes, Route} from "react-router-dom"; 
import UpcomingEvents from './UpcomingEvents';
import FantasySports from './FantasySports';

const Home = () => {
  const upcomingEvents = [
    { title: 'Basketball Game', date: 'may 10, 2023', location: 'Basketball Court' },
    { title: 'Soccer Tournament', date: 'may 15, 2023', location: 'Football Field' },
    { title: 'Volleyball Match', date: 'may 30, 2023', location: 'Basketball Court' },
  ];

  const recentNews = [
    {
      title: 'School Football Team Advances to Finals',
      date: 'April 30, 2023',
      excerpt:
        'The School Football Team has made it to the finals of the State Championship. Read on for more details.',
      image: '',
    },
    {
      title: 'New Gym Facilities Now Open',
      date: 'April 30, 2023',
      excerpt:
        "The school's gym facilities have been renovated and are now open to all students. Check them out!",
      image: '',
    },
  ];

  return (
    <div className="home">
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>Welcome to our Sporting and Entertainment App!</h1>
        <p>Stay connected to all the latest news, events and activities on campus</p>
        <button className="home-button">Get Started</button>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <h2>Live Scores</h2>
          <p>Stay up to date with live scores from sports matches</p>
        </div>
        <div className={styles.feature}>
          <h2>Leagues</h2>
          <p>View current league tables and upcoming events</p>
        </div>
      </div>
    </div>
      <div className={`${styles['upcoming-events']} ${styles.section}`}>
        <h2>Upcoming Events</h2>
        {upcomingEvents.map((event, index) => (
          <div className="event" key={index}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        ))}
        <Link to="/events" className={styles['see-all-events']}>See All Events</Link>
      </div>
      <br/>
      <div className={`${styles['recent-news']} ${styles.section}`}>
        <h2>Recent News</h2>
        {recentNews.map((news, index) => (
          <div className="news" key={index}>
            <img src={news.image} alt={news.title} />
            <div className="news-details">
              <h3>{news.title}</h3>
              <p>{news.date}</p>
              <p>{news.excerpt}</p>
            </div>
          </div>
        ))}
        <Link to="/news" className={styles['see-all-events']}>
          See All News
        </Link>
        <Routes>
      <Route path="/events" element={<UpcomingEvents/>} />
      <Route path="/news" element={<FantasySports/>} />
    </Routes>
      </div>
      <footer>
      <p>&copy; 2023 My App</p>
    </footer>
    </div>
  );
};

export default Home;
