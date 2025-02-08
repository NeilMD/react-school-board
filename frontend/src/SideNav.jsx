import React from "react";
import { FaHome, FaBook, FaUsers, FaCalendarAlt, FaCog } from "react-icons/fa";
import "./SideNav.css";

const navItems = [
  { name: "HOME", icon: <FaHome />, link: "#" },
  { name: "COURSE", icon: <FaBook />, link: "#" },
  { name: "COMMUNITY", icon: <FaUsers />, link: "#" },
  { name: "EVENT", icon: <FaCalendarAlt />, link: "#" },
  { name: "SETTING", icon: <FaCog />, link: "#" }
];

const NavButton = ({ name, icon, link }) => {
  return (
    <a href={link} className="nav-button">
      <span className="nav-icon">{icon}</span>
      <span className="nav-text">{name}</span>
    </a>
  );
};

const SideNav = () => {
  return (
    <nav className="side-nav">
      <div className="nav-items">
        {navItems.map((item) => (
          <NavButton key={item.name} {...item} />
        ))}
      </div>
    </nav>
  );
};

export default SideNav;
