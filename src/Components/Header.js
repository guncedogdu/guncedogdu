import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-top">
      <img src="./images/Gunce.jpg" alt="Günce Oyun" className="logo" style={{width:"20vw", height:"10vh"}} />
      <h1>Günce Oyun 21 Yaşında!</h1>
    </div>
    <Nav />
  </header>
);

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/">Anasayfa</Link></li>
      <li><Link to="/Messages">Mesajlar</Link></li>
      <li><Link to="/Musics">Müzikler</Link></li>
      <li><Link to="/Games">Oyunlar</Link></li>
      <li><Link to="/favorilerim">Favorilerim</Link></li>
      <li><Link to="/uye-listesi">Üye Listesi</Link></li>
      <li><Link to="/sss">SSS</Link></li>
      <li><Link to="/iki-kisilik-oyunlar">2 Kişilik Oyunlar</Link></li>
    </ul>
    <div className="search-bar">
      <input type="text" placeholder="Arama yap..." />
      <button type="submit">Ara</button>
    </div>
  </nav>
);

export default Header;
