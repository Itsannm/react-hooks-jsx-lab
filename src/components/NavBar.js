import React from "react";
import Home from "./Home";
import About from "./About";

function NavBar() {
  // update the JSX being returned!
  return (
  <>
  <nav>
    <ul>
      <li><a href="./Home">Home</a></li>
      <li><a href="./About">About</a></li>
    </ul>
        </nav>;
  </>
  )
}

export default NavBar;
