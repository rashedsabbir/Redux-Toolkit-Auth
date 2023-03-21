import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Components/signUp';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact element={<Login />} path="/login" />
        <Route exact element={<SignUp />} path="/signup" />
        <Route exact element={<Dashboard />} path="/" />
      </Routes>
      </Router>
    </div>
  );
}

export default App;