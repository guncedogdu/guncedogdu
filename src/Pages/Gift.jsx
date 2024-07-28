const photos = [
    { imgSrc: "./images/tadelleBeyaz.jpeg", title: "Tadellee" },
    { imgSrc: "./images/Miniş.jpg", title: "Precious Miniş" },
    
    // Add more games similarly
  ];
const Gift = () => (
    <div>
        <section className="games-section">
        <h3>İsterdim ki bu sayfada gördüğün bu hediyeleri sana vereyim. Şartlar öyle gerektirdi şimdi veremedim ama hep aklımda olacaklar yüzyüze görüştüğümüzde vereceğim.</h3>
        <div className="games-grid">
            {photos.map(photo => (
            <div className="photo" key={photo.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <img src={photo.imgSrc} alt={photo.title} style={{ height:"40vh", width:"23vw" }} />
                <p>{photo.title}</p>
            </div>
            ))}
        </div>
        </section>
    </div>
  );
export default Gift

