import { useState, useEffect } from "react";

import logic from "../logic.js";
import "../styles/profile.css";

const Image = ({ imgArr }) => {
  const [src, setSrc] = useState();
  const [currIndex, setCurrIndex] = useState(0);
  const [counter, setCounter] = useState(imgArr.length);

  const priority = ["google", "linkedin", "facebook", "twitter", "office365"];

  useEffect(() => {
    const value = logic(currIndex, priority, imgArr, counter);
    const imgSrc = value.src;
    const ind = value.ind;

    if (value) {
      setSrc(imgSrc);
      setCurrIndex(ind);
    }
  }, [currIndex]);

  const getNext = (e) => {
    setCounter((counter) => counter - 1);
    setCurrIndex((currIndex) => currIndex + 1);
  };

  return <img className="image" src={src} alt="profile" onError={getNext} />;
};

export default Image;
