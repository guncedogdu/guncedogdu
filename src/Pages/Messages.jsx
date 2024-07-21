import React, { useState, useEffect } from 'react';

const Messages = () => {
  const items = [
    { message:"Doğum gününüz kutlu olsun sanatçı hanım. Umarım hazırladığım şeyleri beğenirsiniz :^).", photo:"abc", user:"Selçuk", music:"abc"},
    { message:"", photo:""}
  ]

  return (
    <div className="messages">
      <h1>Doğum Günü Mesajları</h1>
      <div className="messages-list">
        {items.map((item, index) => (
          <div key={index} className="message">
            {item.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
