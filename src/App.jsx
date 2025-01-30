import React from "react";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Page/Team";

function App() {
  return (
    <>
      {/* <Contact /> */}
      <Team/>
      {/* // <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" elemen={<Home />} /> */}
      {/* <Route path="/about" elemen={<About />} /> */}
      {/* <Route path="/contact" elemen={<Contact />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
