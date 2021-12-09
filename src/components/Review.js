import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Data } from "../Data";
import "./Review.css";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, url, job, info } = Data[index];

  const prevItem = () => {
    const currentName = name;
    Data.forEach((person, index) => {
      if (person.name === currentName) {
        if (index === 0) {
          setIndex(Data.length - 1);
        } else {
          setIndex(index - 1);
        }
      }
    });
  };

  const nextItem = () => {
    const currentName = name;
    Data.forEach((person, index) => {
      if (person.name === currentName) {
        if (index === Data.length - 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      }
    });
  };

  const anyPerson = () => {
    let number = Math.floor(Math.random() * Data.length);
    setIndex(number);
  };

  return (
    <div>
      <section key={id} className="card">
        <img src={url} alt={name} />
        <h2>{name}</h2>
        <p>{job}</p>
        <p>{info}</p>
        <div className="buttons">
          <button className="left" onClick={prevItem}>
            <FaChevronLeft />
          </button>
          <button className="right" onClick={nextItem}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random" onClick={anyPerson}>
          Random
        </button>
      </section>
      ;
    </div>
  );
}

export default Review;
