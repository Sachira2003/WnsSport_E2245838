import React from 'react';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Home />
      <Login />
    </>

  );
}

export default App;

