import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard'; 
import TopicComponent from './Components/TopicComponent';
import Progress from './Components/Progress';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
  path="/dashboard" 
  element={<Dashboard username={localStorage.getItem('username')} />} 
/>
        <Route path="/topic" element={<TopicComponent />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Router>
  );
};

export default App;
