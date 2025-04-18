import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import '../CSS/Dashboard.css';

const quotesList = [
  "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "The best way to predict the future is to invent it.",
];

const Dashboard = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotesList.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <Navbar/>
    <div className="dashboard-background">
     
      <div className="dashboard-content">
        <div className="welcome-card">
          <h1 className="greeting">👋 Welcome</h1>
          <p className="subtext">Here’s some motivation for you:</p>
          <div className="quote-box">
            <p className="quote-text">"{quotesList[currentQuoteIndex]}"</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
