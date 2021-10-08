import "./App.css";
import { useEffect } from "react";
import IntroductionComponent from "./IntroductionComponent/IntroductionComponent";
import NavigationComponent from "./NavigationComponent/NavigationComponent";
import WelcomeComponent from "./WelcomeComponent/WelcomeComponent";
import WhatWeCanDoComponent from "./WhatWeCanDoComponent/WhatWeCanDoComponent";
import ServicesComponent from "./ServicesComponent/ServicesComponent";
import MapComponent from "./MapComponent/MapComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <WelcomeComponent></WelcomeComponent>
      <IntroductionComponent></IntroductionComponent>
      <WhatWeCanDoComponent></WhatWeCanDoComponent>
      <ServicesComponent></ServicesComponent>
      <MapComponent></MapComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
