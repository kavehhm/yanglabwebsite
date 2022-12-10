import "./App.css";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Desc from "./Components/WhatWeDo";
import ResearchForm from "./Components/ResearchForm";
import Top from "./Components/Top-Section";
import { useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import StaffPage from "./Pages/Staff";
import Contact from "./Components/Contact";

export const slides = [
  { url: "./Slides/carousel_1.png", title: "Carousel 1" },
  { url: "./Slides/carousel_2.png", title: "Carousel 2" },
  { url: "./Slides/carousel_3.png", title: "Carousel 3" },
  { url: "./Slides/carousel_4.png", title: "Carousel 4" },
  { url: "./Slides/carousel_5.png", title: "Carousel 5" },
  { url: "./Slides/carousel_6.png", title: "Carousel 6" },
  { url: "./Slides/carousel_7.png", title: "Carousel 7" },
  { url: "./Slides/carousel_8.png", title: "Carousel 8" },
  { url: "./Slides/carousel_9.png", title: "Carousel 9" },
  { url: "./Slides/carousel_10.png", title: "Carousel 10" },
  { url: "./Slides/carousel_11.png", title: "Carousel 11" },
];
function App() {
  const descsec = useRef(null);
  const researchsec = useRef(null);
  const contactsec = useRef(null);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Navbar contactsec={contactsec} researchsec={researchsec} descsec={descsec} />
          <Top />
          <Desc ref={descsec} />
          <ResearchForm ref={researchsec} />
          <Contact ref={contactsec} />
        </Route>
        <Route exact path="/members">
          <Navbar2 />
          <StaffPage />

        </Route>
      </Switch>
    </div>
  );
}

export default App;
