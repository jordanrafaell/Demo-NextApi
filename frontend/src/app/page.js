// pages.js
import React from "react";
import Header from "./pages/header";
import Banner from "./pages/banner";
import './styles/globals.css'


export default function Home() {
  return (
    <>
    <Header />
    <main className="main">
    <Banner/>
    </main>
    </>
  );
}
