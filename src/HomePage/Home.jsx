import IntroductionComponent from "../IntroductionComponent/IntroductionComponent";
import NavigationComponent from "../NavigationComponent/NavigationComponent";
import LoginComponent from "../LoginComponent/LoginComponent";
import WelcomeComponent from "../WelcomeComponent/WelcomeComponent";
import WhatWeCanDoComponent from "../WhatWeCanDoComponent/WhatWeCanDoComponent";
import ServicesComponent from "../ServicesComponent/ServicesComponent";
import MapComponent from "../MapComponent/MapComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState(null);

  // const handleLoginClick = () => {
  //   setIsShowLogin((isShowLogin) => !isShowLogin);
  // };

  useEffect(() => {
    Axios.get("http://localhost:3001/login", {
      headers: { "x-access-token": localStorage.getItem("token") },
    }).then((response) => {
      if (response.data.loggedIn === true) {
        setUserID(response.data.user._id);
        //console.log("userID =====>>>>>>>>>" + userID);
        setUserName(response.data.user.first_name);
        //console.log("userFirstName =====>>>>>" + userName);
      } else {
        console.log(`hello`);
      }
    });
  }, []);

  if (userName == null) {
    return (
      <div className="App">
        {/* <NavigationComponent
          handleLoginClick={handleLoginClick}
          turnOn={true}
        ></NavigationComponent>
        <LoginComponent isShowLogin={isShowLogin}></LoginComponent> */}
        <WelcomeComponent></WelcomeComponent>
        <IntroductionComponent></IntroductionComponent>
        <WhatWeCanDoComponent></WhatWeCanDoComponent>
        <ServicesComponent></ServicesComponent>
        <MapComponent></MapComponent>
      
      </div>
    );
  } else {
    return (
      <div className="App">
        {/* <NavigationComponent
          handleLoginClick={handleLoginClick}
          userName={userName}
          userID={userID}
          turnOn={true}
        ></NavigationComponent> */}
        <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
        <WelcomeComponent></WelcomeComponent>
        <IntroductionComponent></IntroductionComponent>
        <WhatWeCanDoComponent></WhatWeCanDoComponent>
        <ServicesComponent></ServicesComponent>
        <MapComponent></MapComponent>
      </div>
    );
  }
}
