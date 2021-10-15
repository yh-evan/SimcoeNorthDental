import IntroductionComponent from "../IntroductionComponent/IntroductionComponent";
import NavigationComponent from "../NavigationComponent/NavigationComponent";
import WelcomeComponent from "../WelcomeComponent/WelcomeComponent";
import WhatWeCanDoComponent from "../WhatWeCanDoComponent/WhatWeCanDoComponent";
import ServicesComponent from "../ServicesComponent/ServicesComponent";
import MapComponent from "../MapComponent/MapComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

export default function Home() {
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