import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a
        className="link"
        href="https://en.wikipedia.org/wiki/The_Simpsons"
        target="_blank"
        rel="noopener noreferrer"
      >
        Simpsons Quotes
      </a>
    </nav>
  );
}

export default Navbar;
