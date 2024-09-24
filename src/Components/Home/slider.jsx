import React from 'react';
import Slider from 'react-slick';
import { PropTypes } from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DoctorSlider = ({ specifications }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  // FILTER TO GET SPECIFIC DOCTORS
const doctorsIdToShow = [2, 10, 14];

  const filterDoctors = doctors.filter((doctor) => doctorsIdToShow).slice(0, 3);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      {filterDoctors.map((doctor) => (
        <div key={doctor.id}>
          <h3>Doctor: {doctor.name}</h3>
          <h4>Degree: {doctor.degree}</h4>
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
