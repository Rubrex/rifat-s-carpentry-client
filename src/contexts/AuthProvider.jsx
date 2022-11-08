import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // States
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn User
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Logout User
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   Auth State Observer
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
      }
      setLoading(false);
    });
  }, []);

  const contextData = { createUser, logIn, logOut };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
