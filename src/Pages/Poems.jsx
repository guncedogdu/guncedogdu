import React, { useState, useEffect } from 'react';
import './Poems.css'; 

const Poems = () => {
  const items = [
    { poem:"Bir pınarsın içilen ama hiç kanılmayan \n Seveni yanıltmayan,  sevince yanılmayan \n Özlenen sen, özleyen sen, özleten sen \n Varken doyulmayansın, yokken dayanılmayan.", photo:"abc", user:"Ümit Yaşar Oğuzcan", music:"abc"},
    { poem:"Yeşil bir kuştum bir zamanlar \n Nasıl bir yeşil biber yeşili \n Şimşekli göklerde uçardım \n Sadece rüzgarla ilgili \n\n Anlarsa halimden kuşlar anlar \n Artık uçamamaktan kederli \n Sıcak denizlerde bıraktığım \n Umutsuzluktan handiyse deli \n\n Ömründe bir kere olsun uçanlar \n Bir daha yeryüzüne dönmemeli \n Ya güneş yakmalı ya yıldırım \n Ya sıcak yağmurlarda erimeli \n\n Kuşları boşlukta bir hiç sayanlar \n Hiçten fazla mıdırlar çok şüpheli \n Bulutlardan şöyle bir göz atarım \n Yer benek benek onlarla kirli", photo:"abc", user:"Attila İlhan", music:"abc"},
    { poem:"Öylesine güzel seviyorum ki seni, \n Öylesine saf,\n Öylesine temiz,\n Öylesine derin.\n Ve “Öylesine” değil!..",  photo:"abc", user:"Özdemir Asaf", music:"abc"},
    { poem:"Canım benim,\nBilir misin\n“Canım” dediğimde\nİçimden canımın çıkıp sana doğru koştuğunu duyarım hep",  photo:"abc", user:"Ahmed Arif", music:"abc"},
    { poem:"Nefes aldığın şehir ne kadar şanslı.\nKim bilir sesini gökyüzü sanan kuşlar bile vardır",  photo:"abc", user:"Sait Faik Abasıyanık", music:"abc"},
    { poem:"Küçük bir çocuğun yokuş aşağı koşması gibi seni düşünmek.\nBiraz heyecan, biraz da düşecekmiş korkusu…",  photo:"abc", user:"Cemal Süreya", music:"abc"},
    { poem:"Yerin seni çektiği kadar ağırsın\nKanatların çırpındığı kadar hafif…\nKalbinin attığı kadar canlısın\nGözlerinin uzağı gördüğü kadar genç…\nSevdiklerin kadar iyisin\nNefret ettiklerin kadar kötü…\nNe renk olursa olsun kaşın gözün\nKarşındakinin gördüğüdür rengin…\nYaşadıklarını kâr sayma:\nYaşadığın kadar yakınsın sonuna;\n\nNe kadar yaşarsan yaşa,\nSevdiğin kadardır ömrün…\nGülebildiğin kadar mutlusun\nÜzülme bil ki ağladığın kadar güleceksin\nSakın bitti sanma her şeyi,\n\nSevdiğin kadar sevileceksin. Güneşin doğuşundadır doğanın sana verdiği değer\nVe karşındakine değer verdiğin kadar insansın\nBir gün yalan söyleyeceksen eğer\nBırak karşındaki sana güvendiği kadar inansın.\nAy ışığındadır sevgiliye duyulan hasret\nVe sevgiline hasret kaldığın kadar ona yakınsın\nUnutma yağmurun yağdığı kadar ıslaksın\nGüneşin seni ısıttığı kadar sıcak.\nKendini yalnız hissettiğin kadar yalnızsın\nVe güçlü hissettiğin kadar güçlü.\nKendini güzel hissettiğin kadar güzelsin..\n\nİşte budur hayat!\nİşte budur yaşamak, bunu hatırladığın kadar yaşarsın\nBunu unuttuğunda aldığın her nefes kadar üşürsün\nVe karşındakini unuttuğun kadar çabuk unutulursun\nÇiçek sulandığı kadar güzeldir\nKuşlar ötebildiği kadar sevimli\nBebek ağladığı kadar bebektir\nVe her şeyi öğrendiğin kadar bilirsin bunu da öğren,\nSevdiğin kadar sevilirsin...”",  photo:"abc", user:"Can Yücel", music:"abc"},
    { poem:"Seni bulmaktan önce aramak isterim.\nSeni sevmekten önce anlamak isterim.\nSeni bir yaşam boyu bitirmek değil de,\nSana hep, hep yeniden başlamak isterim.",  photo:"abc", user:"Özdemir Asaf", music:"abc"}
  ]

  return (
    <div className="poems-page">
    <div className="messages">
      <h1>Şiirler</h1>
      <div className="messages-list">
        {items.map((item, index) => (
          <div key={index} className="message">
            <pre>{item.poem}</pre>
            <div className="message-user">{item.user}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Poems;
