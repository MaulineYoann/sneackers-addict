import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import SneakersID from './components/SneakersID/SneakersID';
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './pages/Footer/Footer';
import Sneakers from './components/Sneakers/Sneakers';
import './App.scss';
import Contact from './components/Contact/Contact';

function App() {
  
  const API = 'https://a.nacapi.com/sneakers91';
  const [sneakers, setSneakers] = useState([]);
  const [loader, setLoader] = useState(true);
  const getSneakersRequest = async () => {
    await axios
    .get(API)
    .then((res) => res.data)
    .then((data) => setSneakers(data));
    setLoader(false);
  };
  useEffect(() => getSneakersRequest(), [sneakers]);
  

  return loader ? (
    <Loader />
  ) : (
    // return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home sneakers={sneakers} />} />
          <Route path="sneakers" element={<Sneakers sneakers={sneakers} />} />
          <Route
            path="/sneakers/:sneakerId"
            element={<SneakersID sneakers={sneakers} />} />
          
            <Route path="/contact" element={<Contact sneakers={sneakers}/>} />
          <Route path="/no-match" element={<NoMatch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
