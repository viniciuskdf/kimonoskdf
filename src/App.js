import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages';
import PageNotFoundPage from './components/pages/pagenotfound';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/*" element={<PageNotFoundPage/>} />
        </Routes>
    </Router>
  );
}

export default App;