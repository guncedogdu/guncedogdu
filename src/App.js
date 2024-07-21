import React from 'react';
import Header from './Components/Header';
import PhotosSection from './Components/PhotosSection';
import VideosSection from './Components/VideosSection';
import Messages from './Pages/Messages.jsx';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Musics from './Pages/Musics.jsx';
import Games from "./Pages/Games.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Router>
  );
}





const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Messages" element={<Messages />} />
      <Route path="/Musics" element={<Musics />} />
      <Route path="/Games" element={<Games />} />
      <Route path="/favorilerim" element={<Favorilerim />} />
      <Route path="/uye-listesi" element={<UyeListesi />} />
      <Route path="/sss" element={<SSS />} />
      <Route path="/iki-kisilik-oyunlar" element={<IkiKisilikOyunlar />} />
    </Routes>
  </main>
);



const FlashOyunlar = () => <div><h2>Flash Oyunlar</h2></div>;
const Videolar = () => <div><h2>Videolar</h2></div>;
const Favorilerim = () => <div><h2>Favorilerim</h2></div>;
const UyeListesi = () => <div><h2>Üye Listesi</h2></div>;
const SSS = () => <div><h2>SSS</h2></div>;
const IkiKisilikOyunlar = () => <div><h2>2 Kişilik Oyunlar</h2></div>;







export default App;
