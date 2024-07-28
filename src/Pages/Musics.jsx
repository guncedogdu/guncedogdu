import React, { useState, useEffect } from 'react';

const Musics = () => {
  const items = 
  [
    {music:"https://open.spotify.com/embed/track/52cpPh4oiM8aWu2pk4tImr?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/28WZ17sqo5faDvvjr8RZEJ?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/21Rc0BTM9FJQaN1WFmYMaV?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/3u2hBezoNDJdMfbrKYdMwL?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/4tXVu4pS8ip7Tt4X9CpAxI?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/4reNFAKWdv4VlwCQDDmXVP?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/5Ju2DX6SNF2b1heNKchwiY?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/5McqWW9E28hejw11vXMmxE?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/3BvmlFtOAxuZvGDCrUyqsj?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/4ViJpCfojsF6yncsDtXGFW?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/5vgUf8xUqFG5XcvdRsqXxd?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/3ZFCLd6WmmuJjNqLxvKVRG?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/65UH6G3VdwHicwrZ2CnYHb?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/4LXLtYkX7JpdgZgKxdKF4k?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/3ajYmPDtB3P7JTPQ64Dr7P?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/0pGQ7ie0yvg79MrIlR0wDt?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/2aCd0Ulx6YIIhRAbhQnK3B?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/4sFGNz4MYpGoz53ZGCwsiE?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/2FEWcWHnDmGD6WSqpW4VYu?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/1QOSqQevYx6IrRTV9UG3D9?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/4N013YtYizZVLRV5Qv61SE?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/3UpLe8LLNCAMUTpXiQoFEp?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/0ynFJpdwxNpv22s2r5XEdj?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/3xKx1MrO5R8vProomRi6c0?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/3r1Mavl6pZfmJr4I6Gwziv?utm_source=generator"},
    {music: "https://open.spotify.com/embed/track/7LXZEyI1ke06UnmuwG4P8d?utm_source=generator"},
  ]

  return (
    <div className="musics">
      <h1>Müzikler</h1>
      <div className="musics-list">
        {items.map((item, index) => (
          <div key={index} className="message">
            <iframe style={{borderRadius:"12px"}} src={item.music} width="100%" height="252" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Musics;
