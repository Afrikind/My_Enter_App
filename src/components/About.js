import React from 'react';
import './module.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>At ABC Sports, we are passionate about sports and providing high-quality sports content to our viewers.</p>
      <p>Our mission is to be the go-to destination for sports fans worldwide, offering a diverse range of sports programming and coverage.</p>
      <h2>Our Team</h2>
      <ul>
        <li>John Doe - CEO</li>
        <li>Jane Smith - Head of Programming</li>
        <li>Mike Johnson - Chief Sports Correspondent</li>
        <li>Sara Lee - Marketing Manager</li>
      </ul>
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, please feel free to contact us:</p>
      <ul>
        <li>Email: info@abcsports.com</li>
        <li>Phone: +1 (555) 123-4567</li>
        <li>Address: 123 Main Street, Anytown USA</li>
      </ul>
    </div>
  );
};

export default About;
