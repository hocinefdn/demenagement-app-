import React from "react";
import NavBar from "./header/NavBar";
import "./header/header.css";
import AppBar from "./header/AppBar";

function Header() {
  return (
    <header>
      <AppBar />
      <NavBar />
    </header>
  );
}

export default Header;
