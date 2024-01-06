import "./App.css";
import Ads from "./ads/Ads";
import Data from "./data/Data";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import More from "./more/More";
import Product from "./product/Product";
import Slider from "./slider/Slider";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Hero
          first="Look Stylish Be Stylish."
          second="Stylish."
          third="join shop"
        />
      </div>
      <Slider />
      <More />
      <Product />
      <Data />
      <Ads />
      <Footer />
    </div>
  );
}

export default App;
