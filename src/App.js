import "./App.css";
import Introduction from "./components/introduction/Introduction";
import About from "./components/About/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./store/mode-context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#E8F0ED",
        color: darkMode && "#E8F0ED",
      }}
    >
      <Toggle />
      <Introduction />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
