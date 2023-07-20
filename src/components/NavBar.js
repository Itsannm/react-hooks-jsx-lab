import React from "react";
import Home from "./Home";
import About from "./About";

function NavBar() {
  // update the JSX being returned!
  return (
  <>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
        </nav>;
  </>
  )
}

export default NavBar;
