import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AuthProvider>
        <Toaster></Toaster>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
