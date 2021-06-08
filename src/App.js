import "./styles/app.css";
import Profiles from "./components/Profiles.js";

function App() {
  return (
    <div className="container">
      <div className="container__content clearfix">
        <h1>YoungInnovations</h1>
        <Profiles />
      </div>
    </div>
  );
}

export default App;
