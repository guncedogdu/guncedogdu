import React, { useState, useEffect } from 'react';

const Musics = () => {
  const items = 
  [
    {music:"https://open.spotify.com/embed/track/52cpPh4oiM8aWu2pk4tImr?utm_source=generator"},
  ]

  return (
    <div className="musics">
      <h1>Doğum Günü Mesajları</h1>
      <div className="musics-list">
        {items.map((item, index) => (
          <div key={index} className="message">
            <iframe style={{borderRadius:"12px"}} src={item.music} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Musics;
