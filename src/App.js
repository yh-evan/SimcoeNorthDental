import { Switch, Route } from "react-router";
import "./App.css";

import { useState, useEffect } from "react";

import Registration from "./RegistrationPage/Registration";
import Home from "./HomePage/Home";
import DoctorDashboard from "./DoctorDashboardPage/doctorDashboard";
import Dashboard from "./DashboradPage/dashboard";
import CustomerInfoUpdate from "./DashboradPage/CustomerInfoUpdatePage/CustomerInfoUpdate";
import DoctorInfoUpdate from "./DoctorDashboardPage/DoctorInfoUpdatePage/DoctorInfoUpdate";

import "aos/dist/aos.css";
import AOS from "aos";
import ManagerDashboard from "./ManagerDashboard/ManagerDashboard";
import AboutComponent from "./AboutComponent/About";
import ServicespageComponent from "./servicepage/ServicepageComponent";

import NavigationComponent from "./NavigationComponent/NavigationComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import LoginComponent from "./LoginComponent/LoginComponent";
import ManagerCusInfoComponent from "./ManagerDashboard/ManagerCusInfoComponent/ManagerCusInfoComponent";
import ManagerUpdate from "./ManagerDashboard/ManagerUpdatePage/ManagerUpdate";
import Axios from "axios";
import VideoChatComponent from "./VideoChatComponent/VideoChatComponent";

function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState(null);
  const [role, setRole] = useState(null);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
    Axios.get("https://simcoeauth.herokuapp.com/api/login", {
      headers: { "x-access-token": localStorage.getItem("token") },
    }).then((response) => {
      if (response.data.loggedIn === true) {
        setUserID(response.data.user._id);
        setUserName(response.data.user.first_name);
        setRole(response.data.user.role);
      } else {
        console.log(`hello`);
      }
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/video">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={false}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          <VideoChatComponent />
        </Route>
        <Route path="/services">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={false}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          <ServicespageComponent />
        </Route>

        <Route path="/about">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={false}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          <AboutComponent />
        </Route>

        <Route exact path="/register">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={false}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          <Registration />
        </Route>

        <Route path="/manager/customer/:id/update">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={false}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          {role === "manager" && <ManagerUpdate />}
        </Route>

        <Route exact path="/manager/customer/:id">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={false}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          {role === "manager" && <ManagerCusInfoComponent />}
        </Route>

        <Route path="/manager">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={false}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          {role === "manager" && <ManagerDashboard />}
        </Route>

        <Route path="/dashboard/doctor/:id/update">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={false}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          <DoctorInfoUpdate />
        </Route>

        <Route path="/dashboard/doctor/:id">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={false}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          <DoctorDashboard />
        </Route>

        <Route path="/dashboard/:id/update">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={false}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          <CustomerInfoUpdate />
        </Route>

        <Route path="/dashboard/:id">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={false}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          <Dashboard />
        </Route>

        <Route path="/">
          <NavigationComponent
            handleLoginClick={handleLoginClick}
            userName={userName}
            userID={userID}
            turnOn={true}
            role={role}
          ></NavigationComponent>
          <LoginComponent isShowLogin={isShowLogin}></LoginComponent>
          <Home />
        </Route>
      </Switch>

      <FooterComponent />
    </div>
  );
}

export default App;
