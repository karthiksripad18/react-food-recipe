import React from 'react';
import './App.css';
import { useLocation } from 'react-router-dom'

import Navbar from './components/Navbar';

import Routes from './Routes';

function App() {
  const { pathname } = useLocation();
  const isLoginPage = pathname === '/login';
  return (
    <div className="App">
      {!isLoginPage ? <Navbar /> : null}
      <Routes />
    </div>
  );
}

export default App;
