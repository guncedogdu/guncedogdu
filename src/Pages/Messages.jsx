import React, { useState, useEffect } from 'react';

const Messages = () => {
  const items = [
    { message:"Doğum gününüz kutlu olsun sanatçı hanım. Umarım hazırladığım şeyleri beğenirsiniz :^).", photo:"abc", user:"Selçuk", music:"abc"},
    { message:"Sevgili vampir kaplumbağa yoldaṣım, Minderlerin arasında oynarkene birden zamanın acımasızlığında kendimizi 20lerimizde bulduk. Her ne kadar hızlı geçse ve seni son yıllarda aramızdaki mesafe engelinden az görmüş olsam da benim kalbim seninle olan arkadaşlığından hiç tükenmedi ve geçirdiğimiz her saniyeyi hazine misali hafızasında sakladı. Kimseye anlatamadıklarımı ben sana sen bana anlattın, dertleştik, sevindik, güldük, eğlendik. Bu yıllarda başımıza gelmeyen kalmadı belki de. Çok zorluklar geçirdin, belki de bazen çöktün ama sen kendinden ödün vermedin. Seninle çok gurur duyuyorum, sen çok harika bir insansın ve dünyaları hak ediyorsun. Umarım bu yaşında yaşayacakların senin için mutluluk ve huzur dolu olur. Bil ki bu yaşında da her yaşında olduğum gibi yanında olacağım. Seni üzen olursa onları dövme planları da yapacağım. Benim için çok özelsin ve hep öyle kalacaksın. Seni seviyorum. Doğum gününü kutluyor ve senin için harika bir gün olmasını diliyorum <3 iyi ki doğmuşsun :)",  photo:"abc", user:"Pelin", music:"abc"}
  ]

  return (
    <div className="poems-page">
    <div className="messages">
      <h1>Şiirler</h1>
      <div className="messages-list">
        {items.map((item, index) => (
          <div key={index} className="message">
            <pre>{item.message}</pre>
            <div className="message-user">{item.user}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Messages;
