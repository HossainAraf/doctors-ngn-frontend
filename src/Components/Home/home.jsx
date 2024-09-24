// IMPORT
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSpecifications, fetchDoctors  } from '../../Services/apiService';
import Button from '../Button';
import DoctorSlider from './Slider';
import '../../Styles/home.css';

// COMPONENT
const Home = () => {
  const [specifications, setSpecifications] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // FETCH specifications USING useEffect async await
  useEffect(() => {
    const loadSpecifications = async () => {
      const data = await fetchSpecifications();
      setSpecifications(data);
    };
    loadSpecifications(); // Call the function
  }, []); // Empty array to run only once

  // FETCH ALL DOCTORS USING useEffect async await
  useEffect(() => {
    const loadDoctors = async () => {
      const data = await fetchDoctors();
      setDoctors(data);
    };
    loadDoctors();
  }, []);

  // RETURN
  return (
    <div className="home">
      <h1 className="scroll-text"><p className="text-slate-950">ডাক্তার ও মেডিক্যাল সার্ভিস সংক্রান্ত তথ্য , নওগাঁ </p></h1>
      <DoctorSlider doctors={doctors} />
      {specifications.length > 0 ? (
        <div>
          {specifications.map((spec) => (
            <Link key={spec.id} to={`/doctors/${spec.id}`}>
              <Button label={spec.name} className="bg-transparent hover:bg-indigo1 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-1 my-1 border border-blue-500 hover:border-transparent rounded" />
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading specifications...</p>
      )}
    </div>
  );
};

// EXPORT
export default Home;
