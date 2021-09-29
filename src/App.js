import "./App.css";
import IntroductionComponent from "./IntroductionComponent/IntroductionComponent";
import WelcomeComponent from "./WelcomeComponent/WelcomeComponent";

function App() {
  return (
    <div className="App">
      <WelcomeComponent></WelcomeComponent>
      <IntroductionComponent></IntroductionComponent>
    </div>
  );
}

export default App;
