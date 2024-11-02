import React, { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import Person1 from "../Images/personImage1.jpg";
import Person2 from "../Images/personImage2.jpg";
import Person3 from "../Images/personImage3.jpg";

const guestWords = [
  {
    image: Person1,
    message:
      "lorem ipsum dolor sit amet, consectetur adip eu fugiat null lorem ipsum dolor sit amo eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dol",
  },
  {
    image: Person2,
    message:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adip eu fugiat null",
  },
  {
    image: Person3,
    message:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi lorem ipsum dolor sit amet, consectetur adip eu fugiat null",
  },
];

const GuestWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? guestWords.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === guestWords.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="sliderContainer">
        <button className="arrow" onClick={goToPrevious}>
          <GoChevronLeft />
        </button>
        <div className="slide">
          <p>{guestWords[currentIndex].message}</p>
          <img src={guestWords[currentIndex].image} alt="Guest Word" />
        </div>
        <button className="arrow" onClick={goToNext}>
          <GoChevronRight />
        </button>
      </div>
    </>
  );
};

export default GuestWords;
