import React from "react";

import Introduction from "../introduction/Introduction";
import About from "../About/About";
import ProductList from "../productList/ProductList";
import Contact from "../Contact/Contact";
import Toggle from "../toggle/Toggle";

const Home = () => {
  return (
    <>
      <Toggle />
      <Introduction />
      <About />
      <ProductList />
      <Contact />
    </>
  );
};

export default Home;
