import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="flex justify-between items-center bg-slate-400 py-5 px-6 lg:px-12">
      <div className="text-2xl font-bold">SFA App</div>
      <div className="text-xl hidden sm:flex gap-3 justify-center">
        <Link className="py-1 px-3 rounded hover:bg-gray-300" to={"/"}>
          Home
        </Link>
        <Link className="py-1 px-3 rounded hover:bg-gray-300" to={"/about"}>
          About
        </Link>
      </div>
      <div className="text-xl flex sm:hidden">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
}

export default Header;
