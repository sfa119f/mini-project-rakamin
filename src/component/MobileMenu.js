import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import DarkMode from "./DarkMode";

function MobileMenu(props) {
  return (
    <div className="text-xl flex flex-col gap-3 py-5 px-6">
      <div>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-xl py-2 px-3 hover:bg-gray-300/50 cursor-pointer"
          onClick={() => props.closeMenu()}
        />
      </div>
      <Link
        className="py-1 px-3 text-center rounded hover:bg-gray-300/50"
        to={"/"}
        onClick={() => props.closeMenu()}
      >
        Home
      </Link>
      <Link
        className="py-1 px-3 text-center rounded hover:bg-gray-300/50"
        to={"/about"}
        onClick={() => props.closeMenu()}
      >
        About
      </Link>
      <div className="py-1">
        <div className="mx-auto max-w-min hover:bg-gray-300/50">
          <DarkMode
            darkMode={props.darkMode}
            changeDarkMode={(val) => props.changeDarkMode(val)}
          />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
