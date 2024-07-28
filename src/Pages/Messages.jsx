import React, { useState, useEffect } from 'react';

const Messages = () => {
  const items = [
    { message:"Doğum gününüz kutlu olsun sanatçı hanım. Umarım hazırladığım şeyleri beğenirsiniz :^). Açıkçası buraya şu an ne yazacağıma karar veremiyorum. Çok fazla şey yazmak istiyorum, sana çok fazla şey ifade etmek istiyorum. Kelimeler ama kifayetsiz kalıyor. Seni tanıdığım için çok mutluyum. Seni daha çok tanımak istiyorum ve akabinde de içimde sana karşı bir merak besliyorum. Bir şeyleri gördüğümde acaba bunu sever miydi ya da kesin bunu severdi diye düşüncelere sebep oluyorsun. İçimi kıpır kıpır ediyorsun kendimi çocukluğuma dönmüşüm gibi hissediyorum. Sanki böyle aslında çok normal bir şey görmüşüm hoşuma gitmiş hemen seninle paylaşmak istiyorum, sana anlatmak, seninle anılar oluşturmak istiyorum. Açıkçası çok mutlu hissediyorum. Düşüncelerini seviyorum, sanata, bilime, felsefeye yaklaşımına bayılıyorum. Karakterini çok sevimli buluyorum ve onunla paylaşabildiğimm her şeyi paylaşmak istiyorum. Dediğim gibi aklımdan geçen hissettiğim şeyleri kelimelere dökmekte çok zorlanıyorum <3. Umarım eylemlerim benim adıma anlaşılır bir biçimde konuşuyordur. İyi ki doğmuşsun iyi ki varsın <3 :^)", photo:"abc", user:"Selçuk", music:"abc"},
    { message:"Sevgili vampir kaplumbağa yoldaṣım, Minderlerin arasında oynarkene birden zamanın acımasızlığında kendimizi 20lerimizde bulduk. Her ne kadar hızlı geçse ve seni son yıllarda aramızdaki mesafe engelinden az görmüş olsam da benim kalbim seninle olan arkadaşlığından hiç tükenmedi ve geçirdiğimiz her saniyeyi hazine misali hafızasında sakladı. Kimseye anlatamadıklarımı ben sana sen bana anlattın, dertleştik, sevindik, güldük, eğlendik. Bu yıllarda başımıza gelmeyen kalmadı belki de. Çok zorluklar geçirdin, belki de bazen çöktün ama sen kendinden ödün vermedin. Seninle çok gurur duyuyorum, sen çok harika bir insansın ve dünyaları hak ediyorsun. Umarım bu yaşında yaşayacakların senin için mutluluk ve huzur dolu olur. Bil ki bu yaşında da her yaşında olduğum gibi yanında olacağım. Seni üzen olursa onları dövme planları da yapacağım. Benim için çok özelsin ve hep öyle kalacaksın. Seni seviyorum. Doğum gününü kutluyor ve senin için harika bir gün olmasını diliyorum <3 iyi ki doğmuşsun :)",  photo:"abc", user:"Pelin", music:"abc"},
    { message:"Güncecikk doğum günün kutlu olsun. Küçüklüğümüzden hatırladığım zeki ve meraklı kız şimdi geleceğin avukatı olacak. Aynı apartmanda beraber büyüdük, beraber oynadık, Pelinle bana beraber zorbalık yaptınız :). İyiki de öyle olmuş, birlikte anılar biriktirmişiz. Benim için hep yüzümde gülümsemeyle hatırladığım çok değerli bir insansın.Yeni yaşının sana mutluluk getirmesi dileğiyle.",  photo:"abc", user:"Beren", music:"abc"}
  ]

  return (
    <div className="poems-page">
    <div className="messages">
      <h1>Doğum Günü Mesajları</h1>
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
