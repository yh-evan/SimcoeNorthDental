import "./IntroductionComponent.css";

function IntroductionComponent() {
  return (
    <div className="introduction">
      <div className="introduction-content">
        <h1>PROFESSIONAL</h1>
        <p>
          Dr. Hu graduated from Faculty of Dentistry, University of Toronto in
          2017 with a DDS degree and started serving the local communities in
          Ontario since then. Before that, Dr. Hu had been practising as general
          dentist and prosthodontist in a leading hospital in China for more
          than 10 years after graduated with a Master degree of clinical
          medicine in Dentistry from Peking University.{" "}
        </p>
        <button>LEARN MORE</button>
      </div>
      <img
        className="introduction-img"
        src="/img/ClinicMembersPhotos/200014144_B_noBG.png"
        alt="Dr.Hu"
      ></img>
    </div>
  );
}

export default IntroductionComponent;
