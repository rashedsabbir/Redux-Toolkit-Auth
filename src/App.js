import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Components/signUp';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route element={<Login />} exact path="/login" />
      <Route element={<SignUp />} exact path="/signup" />
      <Route exact path='/' element={<PrivateRoute/>}>
      <Route element={<Dashboard />} exact path="/" />
      </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;