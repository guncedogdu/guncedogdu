import PhotosSection from '../Components/PhotosSection';
import VideosSection from '../Components/VideosSection';

const Home = () => (
    <div>
      <VideosSection title="Ferit Köşesi" videos={videos} />
      <PhotosSection title="Günce Köşesi" photos={photos} />
    </div>
  );

  const photos = [
    { imgSrc: "./images/GunceDogumGunu.jpg", title: "Dogum Gunu Kızı" },
    { imgSrc: "./images/GunceVeDigerleri.jpg", title: "Dogum Gunu Kızı" },
    { imgSrc: "./images/Bebeler.jpg", title: "Bebeler" },
    { imgSrc: "./images/Void.jpg", title: "Void Selçuk" },
    { imgSrc: "./images/SEWGI.jpg", title: "SEWGI" },
    { imgSrc: "./images/Meme.jpg", title: "Açım" },
    { imgSrc: "./images/Meme2.jpg", title: "Devir Bitmiş Bitmiş" },
    { imgSrc: "./images/Manzara.jpg", title: "Manzara" },
    { imgSrc: "./images/Koro.jpg", title: "Günce Koro" },
    { imgSrc: "./images/Kopke.jpg", title: "Sadge Kopke" },
    { imgSrc: "./images/Kedy3.jpg", title: "Bunalmış Catto" },
    { imgSrc: "./images/Kedy2.jpg", title: "Uykulu Catto" },
    { imgSrc: "./images/Meme3.jpg", title: "" },
    { imgSrc: "./images/horoz.jpg", title: "HOROZLAR" },
    { imgSrc: "./images/Kedy.jpg", title: "Uykulu Catto" },
    { imgSrc: "./images/HamileSincap.jpg", title: "HAMİLE SİNCAP !!!!!!!!!!!!!!" },
    { imgSrc: "./images/Güvercinn.jpg", title: "Drip Güvercin" },
    { imgSrc: "./images/FirstSelfie.jpg", title: "Padişahım Selfie Çekiyorum Bir Saniye" },
    { imgSrc: "./images/Duck.jpg", title: "Kızgın Ördek Yavrusu" },
    { imgSrc: "./images/Bebek4.jpg", title: "İnsan Ördek Yavrusu" },
    { imgSrc: "./images/Bebek3.jpg", title: "Tosbağa" },
    { imgSrc: "./images/Bebek2.jpg", title: "UYYYYYYYYYYYYYY" },
    { imgSrc: "./images/Bebek.jpg", title: "HERGESE MERHABA ARGADAŞLAR" },
    { imgSrc: "./images/Akça.jpg", title: "AKÇA" },
    { imgSrc: "./images/AESTHETIC HOROZ.jpg", title: "Horoz But Cooler" },
    { imgSrc: "./images/Gunce2013.jpg", title: "Günce Mülakat" },
    { imgSrc: "./images/BagBahce.jpg", title: "Bağ Bahçede Önemli İşler" },
    { imgSrc: "./images/MinnakKuslar.jpg", title: "Minnak 2 Kuş" },
    { imgSrc: "./images/Excited.jpg", title: "Heyecanlı" },
    { imgSrc: "./images/SenHayirdir.jpg", title: "Sen Hayırdır" },
    { imgSrc: "./images/Cool.jpg", title: "Havalı" },
    { imgSrc: "./images/MeyveSuyu.jpg", title: "Meyve Suyu" },
    { imgSrc: "./images/Caylarr.png", title: "Caylarrr" },
    { imgSrc: "./images/Science.jpg", title: "Marmara Üniversitesi Bilim" },
    { imgSrc: "./images/Kule.jpg", title: "Mühendis Günce" },
    // Add more games similarly
  ];
  
  const videos = [
    { videoSrc: "./images/FeritGunce.mp4", title: "Ferit Eğleniyor" },
    { videoSrc: "./images/FeritOpuyor.mp4", title: "Ferit Öpüyor" },
    { videoSrc: "./images/FeritKiziyor.mp4", title: "Ferit Kızıyor" },
    { videoSrc: "./images/BabyBirb.mp4", title: "Kuşlarım Doğdu" },
    { videoSrc: "./images/Fes.mp4", title: "Fes Drip" },
    // Add more games similarly
  ];

  export default Home;