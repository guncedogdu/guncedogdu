import React, { useState, useEffect } from 'react';

const Games = () => {
  const items = 
  [
    {game:"https://html5.gamedistribution.com/a55c9cc9c21e4fc683c8c6857f3d0c75/?timestamp=-62135596800&amp;countryCode=tr&amp;siteid=88&amp;channelid=1&amp;siteLocale=tr&amp;locale=tr&amp;gd_sdk_referrer_url=https%3A%2F%2Fwww.oyunskor.com%2Foyun%2Fates-ve-su"}
  ]

  return (
    <div className="games">
      <h1>Doğum Günü Mesajları</h1>
      <div className="games-list">
        {items.map((item, index) => (
          <div key={index} className="message">
            <iframe  src={item.game} width="900" height="510" scrolling="none" frameborder="0" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowfullscreen"></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
