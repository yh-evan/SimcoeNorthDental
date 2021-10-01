import "./App.css";
import IntroductionComponent from "./IntroductionComponent/IntroductionComponent";
import NavigationComponent from "./NavigationComponent/NavigationComponent";
import WelcomeComponent from "./WelcomeComponent/WelcomeComponent";
import WhatWeCanDoComponent from "./WhatWeCanDoComponent/WhatWeCanDoComponent";

function App() {
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <WelcomeComponent></WelcomeComponent>
      <IntroductionComponent></IntroductionComponent>
      <WhatWeCanDoComponent></WhatWeCanDoComponent>
    </div>
  );
}

export default App;
