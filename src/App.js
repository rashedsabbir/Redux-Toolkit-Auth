import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Components/signUp';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact component={Login} path="/login" />
        <Route path="/" element={<SignUp />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;