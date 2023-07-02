import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function decodeToken(token) {
  try {
    const decodedToken = jwt_decode(token);
    console.log("Token decodificado:", decodedToken);
    const { username } = decodedToken;
    const { mail } = decodedToken;
    return username;
  } catch (error) {
    console.log("Error decoding token:", error);
    return null;
  }
}

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Obtuve el token", token)
    if (token) {
      const decodedUsername = decodeToken(token);
      console.log("Estoy decodeando el username", decodedUsername)
      if (decodedUsername) {
        setUsername(decodedUsername);
      }
    }
  }, []);

  function setToken(token) {
    if (token) {
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      const decodedUsername = decodeToken(token);
      console.log("Estoy decodeando el username", decodedUsername)
      if (decodedUsername) {
        setUsername(decodedUsername);
      } else {
        setUsername("");
      }
    } else {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setUsername("");
    }
  }

  function logout() {
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        token: localStorage.getItem("token"),
        setToken,
        logout,
        isAuthenticated,
        username,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
