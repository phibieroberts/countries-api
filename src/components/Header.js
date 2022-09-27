import React, { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context";

function Header() {
  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode;

  const handleToggle=()=>{
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <div className="header" 
    style={{backgroundColor:theme.state.darkMode ? "hsl(209, 23%, 22%)":'white', color:darkMode && 'white'}}
    >
      <div className="header-container">
        <div className="header-text">
          <h2 className="logo">Where in the world?</h2>
        </div>
        <div className="switch-mode">
          <h4  onClick={handleToggle} className="mode">
            <FaMoon />
            Dark Mode
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
