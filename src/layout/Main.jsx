import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div className="font-poppins">
      <Header />
      {navigation.state === "idle" ? <Outlet /> : <Loading />}
      <Footer />
    </div>
  );
};

export default Main;
