import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Demo />
    </div>
  );
}
export default App;
