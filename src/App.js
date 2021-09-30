import "./App.css";
import IntroductionComponent from "./IntroductionComponent/IntroductionComponent";
import NavigationComponent from "./NavigationComponent/NavigationComponent";
import WelcomeComponent from "./WelcomeComponent/WelcomeComponent";

function App() {
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <WelcomeComponent></WelcomeComponent>
      <IntroductionComponent></IntroductionComponent>
    </div>
  );
}

export default App;
