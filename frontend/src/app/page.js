// pages.js
import React from "react";
import Header from "./pages/header";
import Banner from "./pages/banner";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Services from "./pages/services";
import './styles/globals.css';


export default function Home() {
  return (
    <>
    <Header/>
    <main className="main">
    <Banner/>
    <About/>
    <Dashboard />
    <Services/>
    </main>
    </>
  );
}
