import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-top">
      <img src="./guncedogdu/images/Gunce.jpg" alt="Günce Oyun" className="logo" style={{width:"20vw", height:"10vh"}} />
      <h1>Günce Oyun 21 Yaşında!</h1>
    </div>
    <Nav />
  </header>
);

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/guncedogdu">Anasayfa</Link></li>
      <li><Link to="/guncedogdu/Messages">Mesajlar</Link></li>
      <li><Link to="/guncedogdu/Musics">Müzikler</Link></li>
      <li><Link to="/guncedogdu/Games">Oyunlar</Link></li>
      <li><Link to="/guncedogdu/favorilerim">Favorilerim</Link></li>
      <li><Link to="/guncedogdu/uye-listesi">Üye Listesi</Link></li>
      <li><Link to="/guncedogdu/sss">SSS</Link></li>
      <li><Link to="/guncedogdu/iki-kisilik-oyunlar">2 Kişilik Oyunlar</Link></li>
    </ul>
    <div className="search-bar">
      <input type="text" placeholder="Arama yap..." />
      <button type="submit">Ara</button>
    </div>
  </nav>
);

export default Header;
