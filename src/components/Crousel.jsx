import React, { useState } from "react";
import { data } from "../pages/restApi.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Crousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = data[0].testimonials;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials available</div>;
  }

  const current = testimonials[currentIndex];

  return (
    <section className="testimonial_section" id="testimonials">
      <div className="container">
        <h1 className="heading">WHAT OUR CUSTOMERS SAY</h1>
        <div className="carousel_wrapper">
          <button className="carousel_btn prev" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          
          <div className="carousel_content">
            <div className="testimonial_card">
              <img src={current.image} alt="reviewer" className="reviewer_image" />
              <p className="testimonial_text">"{current.description}"</p>
              <div className="rating">
                {"⭐".repeat(Math.floor(current.rating))}
              </div>
              <h3 className="reviewer_name">{current.userName}</h3>
            </div>
          </div>

          <button className="carousel_btn next" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel_indicators">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crousel;
