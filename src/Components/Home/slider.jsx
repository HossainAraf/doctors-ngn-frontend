import React from 'react';
import Slider from 'react-slick';
import { PropTypes } from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mamun from '../../Assets/Img/mamun.png';
import salemir from '../../Assets/Img/salemir.png';
import emdadul from '../../Assets/Img/emdadul.png';

// IMAGE MAPPING
const imageMap = {
  2: mamun,
  4: salemir,
  1: emdadul,
};

const DoctorSlider = ({ doctors }) => {
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
  const doctorsIdToShow = [2, 4, 1];

  //  CHECK IF doctor's id IS IN doctorIdToShow ARRAY
  const filterDoctors = doctors.filter((doctor) => doctorsIdToShow.includes(doctor.id)).slice(0, 3);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      {filterDoctors.map((doctor) => (
        <div key={doctor.id} className="flex text-center">
          <div className="flex justify-center">
            <img className="w-32" src={imageMap[doctor.id]} alt={`doctor ${doctor.name}`} />
          </div>
          <h3 className="text-indigo1">
            ডাঃ&nbsp;
            {doctor.name}
          </h3>
          <h4>
            {doctor.degree}
          </h4>
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
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // id must be a number
      name: PropTypes.string.isRequired, // name must be a string
      degree: PropTypes.string.isRequired, // degree must be a string
    }),
  ).isRequired,
};

export default DoctorSlider;
