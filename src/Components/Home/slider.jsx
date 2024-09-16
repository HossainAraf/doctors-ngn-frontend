import React from 'react';
import Slider from 'react-slick';
import { PropTypes } from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DoctorSlider = ({ specifications }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      {specifications.slice(0, 3).map((spec) => (
        <div key={spec.id}>
          {/* <img src={emdad} alt="doctor" /> */}
          <h3>
            Name: Dr.
            {spec.name}
          </h3>
          <p>
            Desc:
            {spec.description}
          </p>
        </div>
      ))}
    </Slider>
  );
};

// PROP VALIDATION FOR specification.slice
DoctorSlider.propTypes = {
  specifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DoctorSlider;
