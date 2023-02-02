import React from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import FourthSection from "./components/FourthSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LastSection from "./components/LastSection";
import Mentors from "./components/Mentors";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Mentors />
      <FourthSection />
      <Carousel />
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
