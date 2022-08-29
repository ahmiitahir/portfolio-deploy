import "./App.css";
import Introduction from "./components/introduction/Introduction";
import About from "./components/About/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Introduction />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
