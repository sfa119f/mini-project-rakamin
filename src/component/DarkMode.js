import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function DarkMode(props) {
  return (
    <FontAwesomeIcon
      icon={props.darkMode ? faMoon : faSun}
      className="py-1 px-3 font-xl cursor-pointer"
      onClick={() => props.changeDarkMode(!props.darkMode)}
    />
  );
}

export default DarkMode;
