import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Account from "./Pages/Account/Account";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<Account />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
