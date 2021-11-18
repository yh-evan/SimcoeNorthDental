import IntroductionComponent from "../IntroductionComponent/IntroductionComponent";
import WelcomeComponent from "../WelcomeComponent/WelcomeComponent";
import WhatWeCanDoComponent from "../WhatWeCanDoComponent/WhatWeCanDoComponent";
import ServicesComponent from "../ServicesComponent/ServicesComponent";
import MapComponent from "../MapComponent/MapComponent";
import "./Home.css";

export default function Home() {
    return (
      <div className="App">
        <WelcomeComponent></WelcomeComponent>
        <IntroductionComponent></IntroductionComponent>
        <WhatWeCanDoComponent></WhatWeCanDoComponent>
        <ServicesComponent></ServicesComponent>
        <MapComponent></MapComponent>
      </div>
    );
  
}
