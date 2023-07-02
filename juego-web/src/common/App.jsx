import React from "react";
import { Toaster } from "react-hot-toast";
import Router from "./Router";
import AuthProvider from '../auth/AuthProvider'

function App() {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#191414",
            color: "white",
            border: "1px solid #2e2c2c",
          },
        }}
      />
    </>
  );
}

export default App;
