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
    { imgSrc: "./images/Void.jpg", title: "Bebeler" },
    { imgSrc: "./images/SEWGI.jpg", title: "Bebeler" },
    { imgSrc: "./images/Meme3.jpg", title: "Bebeler" },
    { imgSrc: "./images/Meme2.jpg", title: "Bebeler" },
    { imgSrc: "./images/Manzara.jpg", title: "Bebeler" },
    { imgSrc: "./images/Koro.jpg", title: "Bebeler" },
    { imgSrc: "./images/Kopke.jpg", title: "Bebeler" },
    { imgSrc: "./images/Kedy3.jpg", title: "Bebeler" },
    { imgSrc: "./images/Kedy2.jpg", title: "Bebeler" },
    { imgSrc: "./images/Meme3.jpg", title: "Bebeler" },
    { imgSrc: "./images/horoz.jpg", title: "Bebeler" },
    { imgSrc: "./images/Kedy.jpg", title: "Bebeler" },
    { imgSrc: "./images/HamileSincap.jpg", title: "Bebeler" },
    { imgSrc: "./images/Güvercinn.jpg", title: "Bebeler" },
    { imgSrc: "./images/FirstSelfie.jpg", title: "Bebeler" },
    { imgSrc: "./images/Duck.jpg", title: "Bebeler" },
    { imgSrc: "./images/Bebek4.jpg", title: "Bebeler" },
    { imgSrc: "./images/Bebek3.jpg", title: "Bebeler" },
    { imgSrc: "./images/Bebek2.jpg", title: "Bebeler" },
    { imgSrc: "./images/Bebek.jpg", title: "Bebeler" },
    { imgSrc: "./images/Akça.jpg", title: "Bebeler" },
    { imgSrc: "./images/AESTHETIC HOROZ.jpg", title: "Bebeler" },
    { imgSrc: "./images/Gunce2013.jpg", title: "Bebeler" },
    { imgSrc: "./images/BagBahce.jpg", title: "Bebeler" },
    { imgSrc: "./images/MinnakKuslar.jpg", title: "Bebeler" },
    { imgSrc: "./images/Excited.jpg", title: "Bebeler" },
    { imgSrc: "./images/SenHayirdir.jpg", title: "Bebeler" },
    { imgSrc: "./images/Cool.jpg", title: "Bebeler" },
    { imgSrc: "./images/MeyveSuyu.jpg", title: "Bebeler" },
    { imgSrc: "./images/Caylarr.jpg", title: "Bebeler" },
    { imgSrc: "./images/Science.jpg", title: "Bebeler" },
    { imgSrc: "./images/Kule.jpg", title: "Bebeler" },
    { imgSrc: "./images/AESTHETIC HOROZ.jpg", title: "Bebeler" },
    // Add more games similarly
  ];
  
  const videos = [
    { videoSrc: "./images/FeritGunce.mp4", title: "Ferit Eğleniyor" },
    { videoSrc: "./images/FeritOpuyor.mp4", title: "Ferit Öpüyor" },
    { videoSrc: "./images/FeritKiziyor.mp4", title: "Ferit Kızıyor" },
    { videoSrc: "./images/BabyBirb.mp4", title: "Ferit Kızıyor" },
    { videoSrc: "./images/Fes.mp4", title: "Ferit Kızıyor" },
    // Add more games similarly
  ];

  export default Home;