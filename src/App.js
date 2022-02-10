import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import SneakersID from './components/SneakersID/SneakersID';
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './pages/Footer/Footer';
import Sneakers from './components/Sneakers/Sneakers';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sneakers" element={<Sneakers />} />
          <Route path="/sneakers/:sneakerId" element={<SneakersID />} />
          <Route path="/no-match" element={<NoMatch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
