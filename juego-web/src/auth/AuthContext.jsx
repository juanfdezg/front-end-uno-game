import { createContext, useContext } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
});

export const useAuth = () => {
    return useContext(AuthContext);
  };