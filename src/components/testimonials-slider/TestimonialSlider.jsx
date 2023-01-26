import { useState } from "react";
import styles from "./TestimonialSlider.module.scss";

function TestimonialSlider({ ...data }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  const handleOnClickPrev = () => {
    if (index === 0) {
      setPrev(false);
    } else {
      setPrev(true);
      setIndex(index - 1);
    }
  };

  const handleOnClickNext = () => {
    if (index >= Object.keys(data).length - 1) {
      setNext(false);
    } else {
      setNext(true);
      setIndex(index + 1);
    }
  };
  return (
    <div className="container">
      <div className="left-container">
        <img src={`images/${data[index].image}`}></img>
        <div className="controls">
          <img
            src="images/icon-prev.svg"
            onClick={handleOnClickPrev}
            className={`arrow-${prev}`}
          ></img>
          <img
            src="images/icon-next.svg"
            onClick={handleOnClickNext}
            className={next ? "active-arrow" : "inactive-arrow"}
          ></img>
        </div>
      </div>
      <div className="right-container">
        <div className="testimonial">
          <p>{data[index].testimonial}</p>
        </div>
        <div className="personal-info">
          <p>{data[index].name}</p>
          <p>{data[index].position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;
