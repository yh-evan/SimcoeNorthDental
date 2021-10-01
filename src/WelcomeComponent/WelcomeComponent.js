import "./WelcomeComponent.css";

function WelcomeComponent() {
  return (
    <div className="welcome">
      <div className="welcome-left">
        {/* <img
          className="welcome-left-img"
          src="/img/the-humble-cropped.png"
          alt="welcome-left-img"
        ></img> */}
        <video
          className="welcome-left-video"
          src="/video/pexels-c-technical-6528836-compressed.mp4"
          loop
          autoPlay
          muted
          type="video/mov"
        ></video>
        <div className="welcome-left-video-mask"></div>
      </div>
      <div className="welcome-right">
        <div className="welcome-right-content">
          <h5>Family Dentist in Oshawa</h5>
          <h1>Meet your neighbors at the Dentist</h1>
          <div className="welcome-right-button">
            <button className="welcome-right-button-book">BOOK NOW</button>
            <button className="welcome-right-button-call">
              OR CALL: (905) 417-4481
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeComponent;
