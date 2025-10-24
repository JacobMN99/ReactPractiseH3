import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./MainLayout.css";

function MainLayout() {
  return (
    <>
      <Header headerText="Jacob Malthe Nielsen" />
      <Navigation />
      <main className="content">
        <Outlet />
      </main>
      <Footer footertext="Jeg er 25 år gammel" />
    </>
  );
}

export default MainLayout;