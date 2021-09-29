import "./WelcomeComponent.css";

function WelcomeComponent() {
  return (
    <div className="welcome">
      <div className="welcome-left">
        <img
          className="welcome-left-img"
          src="/img/the-humble-cropped.png"
          alt="welcome-left-img"
        ></img>
      </div>
      <div className="welcome-right">
        <div className="welcome-right-content">
          <h5>Family Dentist in Oshawa</h5>
          <h1>Meet your neighbor at the Dentist</h1>
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
