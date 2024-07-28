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
      <li><Link to="/guncedogdu/">Anasayfa</Link></li>
      <li><Link to="/guncedogdu/Messages">Mesajlar</Link></li>
      <li><Link to="/guncedogdu/Musics">Müzikler</Link></li>
      <li><Link to="/guncedogdu/Games">Oyunlar</Link></li>
      <li><Link to="/guncedogdu/Poems">Şiirler</Link></li>
    </ul>
    <div className="search-bar">
      <input type="text" placeholder="Arama yap..." />
      <button type="submit">Ara</button>
    </div>
  </nav>
);

export default Header;
