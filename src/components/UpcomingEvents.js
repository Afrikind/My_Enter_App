import React from "react";
import "./UpcomingEvents.css";

function UpcomingEvents() {
  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="event-container">
        <div className="event-card">
          <div className="event-image">
            <img src="" alt="Event 1" />
          </div>
          <div className="event-details">
            <h3>Basketball Game</h3>
            <p>Location: Basketball Court</p>
            <p>Date: may 10th, 2023</p>
            <button className="event-register-btn">RegisterNow</button>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">
            <img src="" alt="Event 2" />
          </div>
          <div className="event-details">
            <h3>Soccer Tournament</h3>
            <p>Location: Football Field</p>
            <p>Date: may 15th, 2023</p>
            <button className="event-register-btn">RegisterNow</button>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">
            <img src="https://example.com/event3.jpg" alt="Event 3" />
          </div>
          <div className="event-details">
            <h3>Basketball Game</h3>
            <p>Location: Basketball Court</p>
            <p>Date: may 30th, 2023</p>
            <button className="event-register-btn">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
