import { Switch, Route } from 'react-router';
import "./App.css";

import { useEffect } from "react";

import Registration from './RegistrationPage/Registration';
import Home from './HomePage/Home';
import Dashboard from './DashboradPage/dashboard';

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
    <Switch>
      <Route exact path="/register">
        <Registration />
      </Route>
      <Route path="/dashboard/:id">
        <Dashboard />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
