const PhotosSection = ({ title, photos }) => (
    <section className="games-section">
      <h3>{title}</h3>
      <div className="games-grid">
        {photos.map(photo => (
          <div className="photo" key={photo.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <img src={photo.imgSrc} alt={photo.title} style={{ height:"40vh", width:"23vw" }} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </section>
  );

export default PhotosSection