import React, { useContext, useState } from "react";
import { AuthContext, useAuth } from "../../../auth/AuthContext";
import "./UserLogin.css";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  const handleLogout = () => {
    logout();
    setMsg("¡Has hecho logout con éxito!");
  };

  return (
    <>
    <div className="button-class">
        <button onClick={handleLogout} className="">
        {isAuthenticated ? "Cerrar sesión" : "Iniciar sesión"}
        </button>

    </div>
    </>
  );
};

export default LogoutButton;
