const VideosSection = ({ title, videos }) => (
    <section className="games-section">
      <h3>{title}</h3>
      <div className="games-grid">
        {videos.map(video => (
          <div key={video.title}>
            <h1>{video.title}</h1>
            <video width="300" controls>
              <source src={video.videoSrc} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </section>
  );

export default VideosSection