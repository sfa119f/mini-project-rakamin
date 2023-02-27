import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function MobileMenu(props) {
  return (
    <div className="text-xl flex flex-col gap-3 py-5 px-6">
      <FontAwesomeIcon icon={faXmark} onClick={() => props.closeMenu()} />
      <Link
        className="py-1 px-3 text-center rounded hover:bg-gray-300"
        to={"/"}
        onClick={() => props.closeMenu()}
      >
        Home
      </Link>
      <Link
        className="py-1 px-3 text-center rounded hover:bg-gray-300"
        to={"/about"}
        onClick={() => props.closeMenu()}
      >
        About
      </Link>
    </div>
  );
}

export default MobileMenu;
