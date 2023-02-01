import { useState, useRef, useEffect } from "react";
import styles from "./TestimonialSlider.module.scss";

function TestimonialSlider({ ...data }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);

  const handleOnClickPrev = () => {
    if (index === 0) return;
    setPrev(true);
    setIndex(index - 1);
  };
  const handleOnClickNext = () => {
    if (index >= Object.keys(data).length - 1) return;
    setNext(true);
    setIndex(index + 1);
  };

  useEffect(() => {
    if (index >= Object.keys(data).length - 1) {
      setNext(false);
      setPrev(true);
    }
    if (index === 0) {
      setNext(true);
      setPrev(false);
    }
  }, [index]);

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles["left-container"]}>
          <img
            src={`images/${data[index].image}`}
            className={styles["slider-image"]}
          ></img>
          <div className={styles["controls"]}>
            <img
              src="images/icon-prev.svg"
              onClick={handleOnClickPrev}
              className={
                prev ? styles["active-arrow"] : styles["inactive-arrow"]
              }
            ></img>
            <img
              src="images/icon-next.svg"
              onClick={handleOnClickNext}
              className={
                next ? styles["active-arrow"] : styles["inactive-arrow"]
              }
            ></img>
          </div>
        </div>
        <div className={styles["right-container"]}>
          <div className={styles.testimonial}>
            <p>{data[index].testimonial}</p>
          </div>
          <div className={styles["personal-info"]}>
            <p className={styles.name}>{data[index].name}</p>
            <p className={styles.position}>{data[index].position}</p>
          </div>
        </div>
      </div>
      <div className={styles["pattern-curve"]}>
        <img src="images/pattern-curve.svg"></img>
      </div>
    </div>
  );
}

export default TestimonialSlider;
