import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext, useAuth } from "../../auth/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const MenuItems = [
    {
      title: "Inicio",
      url: "/home-page",
      cName: "nav-links",
      icon: "fa-solid fa-house",
    },
    {
      title: "Nosotros",
      url: "/about-us",
      cName: "nav-links",
      icon: "fa-solid fa-user-group",
    },
    {
      title: "Instrucciones",
      url: "/instructions",
      cName: "nav-links",
      icon: "fa-solid fa-book",
    },
    {
      title: "Iniciar Sesión",
      url: "/login-sign-in",
      cName: "nav-links",
      condition: isAuthenticated,
    },
  ];

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <nav className="navbar-items" >
      <a href="/">
        <img src="/uno_logo_byn.svg" alt="Logo UNO" className="logo-image" />
      </a>

      <div className="menu-icons" onClick={handleClick}>
        <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          if (item.condition) {
            return null;
          }

          return (
            <li key={index}>
              <NavLink className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </NavLink>
            </li>
          );
        })}
        
        {isAuthenticated && (
          <li key={3}>
            <NavLink className="nav-button" to="/home-page" onClick={handleLogout}>
                <i className=""></i>
                Cerrar Sesión
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
