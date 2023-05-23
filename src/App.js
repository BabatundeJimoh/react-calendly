import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Firstpage/Navbar";
import Individual from "./Firstpage/Individual";
import Teams from "./Firstpage/Teams";
import Routing from "./Routing";

function App() {
  return (
    <div>
      <Navbar />
      <Routing />
      {/* <Individual /> */}
      {/* <Teams /> */}
    </div>
  );
}

export default App;
