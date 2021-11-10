import { Switch, Route } from "react-router";
import "./App.css";

import { useEffect } from "react";

import Registration from "./RegistrationPage/Registration";
import Home from "./HomePage/Home";

import "aos/dist/aos.css";
import AOS from "aos";
import ManagerDashboard from "./ManagerDashboard/ManagerDashboard";
import ManagerCustomerDetails from "./ManagerDashboard/ManagerCustomerDetails";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <Switch>
      <Route exact path="/register">
        <Registration />
      </Route>

      <Route
        exact
        path="/manager/customer/:id"
        render={(props) => (
          <ManagerCustomerDetails id={props.match.params.id} />
        )}
      />

      <Route path="/manager">
        <ManagerDashboard />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
