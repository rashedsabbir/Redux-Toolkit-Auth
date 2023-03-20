import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Components/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;