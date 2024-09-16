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
  };

  return (
    <Slider {...settings}>
      {specifications.slice(0, 3).map((spec) => (
        <div key={spec.id}>
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

export default DoctorSlider;
