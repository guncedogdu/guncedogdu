import PhotosSection from '../Components/PhotosSection';
import VideosSection from '../Components/VideosSection';

const Home = () => (
    <div>
      <VideosSection title="Ferit Köşesi" videos={videos} />
      <PhotosSection title="Günce Köşesi" photos={photos} />
    </div>
  );

  const photos = [
    // { imgSrc: "./images/KafalarGuzel.jpg", title: "Kafalar Guzel" },
    { imgSrc: "./images/GunceDogumGunu.jpg", title: "Dogum Gunu Kızı" },
    { imgSrc: "./guncedogdu/images/GunceVeDigerleri.jpg", title: "Dogum Gunu Kızı" },
    { imgSrc: "./guncedogdu/images/Bebeler.jpg", title: "Bebeler" },
    // Add more games similarly
  ];
  
  const videos = [
    { videoSrc: "./guncedogdu/images/FeritGunce.mp4", title: "Ferit Eğleniyor" },
    { videoSrc: "./guncedogdu/images/FeritOpuyor.mp4", title: "Ferit Öpüyor" },
    { videoSrc: "./guncedogdu/images/FeritKiziyor.mp4", title: "Ferit Kızıyor" },
    // Add more games similarly
  ];

  export default Home;