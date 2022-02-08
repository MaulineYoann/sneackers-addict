import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import SneakersID from './components/SneakersID/SneakersID';
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './pages/Footer/Footer';
import Loader from './components/Loader/Loader';
import Sneakers from './components/Sneakers/Sneakers';
import './App.scss';

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [loader, setLoader] = useState(true);

  const getSneakersRequest = async () => {
    await axios
      .get('https://a.nacapi.com/sneakers91')
      .then((res) => res.data)
      .then((data) => setSneakers(data));
    setLoader(false);
  };

  useEffect(() => getSneakersRequest(), []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {loader ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home sneakers={sneakers} />} />
            <Route path="sneakers" element={<Sneakers sneakers={sneakers} />} />
            <Route
              path="/sneakers/:sneakerId"
              element={<SneakersID sneakers={sneakers} />}
            />
            <Route path="/no-match" element={<NoMatch />} />
          </Routes>
        )}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
