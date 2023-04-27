import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './module.css';

const ScheduleCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className="calendar-container">
      <h2>Schedule Calendar</h2>
      <div className="calendar-wrapper">
        <Calendar value={date} onChange={handleDateChange} />
      </div>
      <div className="selected-date">
        <h3>Selected Date:</h3>
        <p>{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ScheduleCalendar;
