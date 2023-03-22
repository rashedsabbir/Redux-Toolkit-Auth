import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Components/signUp';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import Navbar from './Components/Navbar';
import Users from './Components/Users';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<SignUp />} path="/" />
      <Route exact path='/' element={<PrivateRoute/>}>
      <Route element={<Dashboard />} exact path="/dashboard" />
      <Route element={<Users />} exact path="/users" />
      </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;