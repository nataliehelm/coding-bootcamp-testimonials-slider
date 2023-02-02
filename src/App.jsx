import reactLogo from "./assets/react.svg";
//import "./App.css";
import TestimonialSlider from "./components/testimonials-slider/TestimonialSlider";
import data from "../src/lib/data.json";

function App() {
  return (
    <main>
      <TestimonialSlider {...data}></TestimonialSlider>
    </main>
  );
}

export default App;
