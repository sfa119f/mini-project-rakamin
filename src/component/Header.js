import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex gap-3 justify-center">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </div>
  );
}

export default Header;
