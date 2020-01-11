import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import QuoteCard from "./components/QuoteCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard 
        quote = "Hum... I love donuts... And beer!"
        character = "Homer Simpson"
        image = "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      />
      <QuoteCard 
        quote = "I'm always on the board..."
        character = "Bart Simpson"
        image = "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511939"
      />
      <QuoteCard 
        quote = "Who don't like Simpsons?..."
      />
    </div>
  );
}

export default App;
