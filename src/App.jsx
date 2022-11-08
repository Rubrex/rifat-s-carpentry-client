import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
