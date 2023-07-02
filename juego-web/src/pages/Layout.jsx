import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";

function Layout() {
  const location = useLocation();
  
  // Lista de rutas en las que si se muestre la navbar
  const allowedRoutes = ["/about-us", "/home-page", "/instructions"]

  // Si la ruta actual no está en la lista de rutas permitidas, no se muestra la navbar
  if (!allowedRoutes.includes(location.pathname)) {
    return <Outlet />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout;