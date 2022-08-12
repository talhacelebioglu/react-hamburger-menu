import React from "react";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SidebarData } from "./Sidebar.Data";
import "./Navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="hamburger-menu">
          <GiIcons.GiHamburgerMenu onClick={handleClick} />
        </Link>
      </div>
      <div className={show ? "overlay active" : "overlay"}></div>
      <div className="nav">
        <nav className={show ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={handleClick}>
            <li className="navbar-close">
              <Link to="#" className="hamburger-menu">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className="nav-text">
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
