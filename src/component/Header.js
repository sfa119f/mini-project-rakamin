import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./MobileMenu";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
        <FontAwesomeIcon
          className="py-1 px-3 rounded hover:bg-gray-300"
          icon={faBars}
          onClick={() => setShowMobileMenu(true)}
        />
      </div>
      {showMobileMenu && (
        <div
          className="absolute top-0 right-0 z-10 h-full w-full bg-black/50"
          onClick={() => setShowMobileMenu(false)}
        ></div>
      )}
      {showMobileMenu && (
        <div className="fixed top-0 right-0 z-10 h-full w-3/4 bg-slate-400">
          <MobileMenu closeMenu={() => setShowMobileMenu(false)} />
        </div>
      )}
    </nav>
  );
}

export default Header;
