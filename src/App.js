import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import Carousel from "./CarouselSlider";
import Homepage from "./Homepage/Homepage";

function App() {
  return (
    <div>
      <header className="App-header">
        <Navigation />
      </header>
      <div id="carousel">
        <Carousel />
      </div>
      <div id="main-content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
