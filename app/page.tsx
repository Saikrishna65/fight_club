// app/page.tsx
"use client";

import About from "./components/About";
import Cast from "./components/Cast";
import End from "./components/End";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Cast />
      <End />
    </>
  );
};

export default HomePage;
