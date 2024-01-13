import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Services from "./components/Services";

function App() {
  return (
    <>
      <NavBar />
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Blog/>
      <Newsletter/>
      <MyFooter/>
    </>
  );
}

export default App;
