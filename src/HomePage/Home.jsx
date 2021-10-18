import IntroductionComponent from "../IntroductionComponent/IntroductionComponent";
import NavigationComponent from "../NavigationComponent/NavigationComponent";
import LoginComponent from "../LoginComponent/LoginComponent";
import WelcomeComponent from "../WelcomeComponent/WelcomeComponent";
import WhatWeCanDoComponent from "../WhatWeCanDoComponent/WhatWeCanDoComponent";
import ServicesComponent from "../ServicesComponent/ServicesComponent";
import MapComponent from "../MapComponent/MapComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import { useState } from "react";
import "./Home.css"

export default function Home() {

    const [isShowLogin, setIsShowLogin] = useState(false)

    const handleLoginClick = () => {
      setIsShowLogin((isShowLogin) => !isShowLogin)
    }

    return (
        <div className="App">
          <NavigationComponent handleLoginClick={handleLoginClick}></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          <WelcomeComponent></WelcomeComponent>
          <IntroductionComponent></IntroductionComponent>
          <WhatWeCanDoComponent></WhatWeCanDoComponent>
          <ServicesComponent></ServicesComponent>
          <MapComponent></MapComponent>
          <FooterComponent></FooterComponent>
        </div>
    );
}