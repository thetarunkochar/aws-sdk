import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './services-pages/start-instance';
import Stop from './services-pages/stop-instance';
import List from './services-pages/list-instance';
import Create from './services-pages/create-instance';
import Navbar from './components/Navbar';
import Doc from './services-pages/documentation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={Doc} />
        <Route path='/create-instance' element={Create} />
        <Route path='/start-instance' element={Start} />
        <Route path='/stop-instance' element={Stop} />
        <Route path='/list-instances' element={List} />

      </Routes>
    </Router>
  );
}

export default App;
