import reactLogo from "./assets/react.svg";
//import "./App.css";
import TestimonialSlider from "./components/testimonials-slider/TestimonialSlider";
import data from "../src/lib/data.json";

function App() {
  return <TestimonialSlider {...data}></TestimonialSlider>;
}

export default App;
