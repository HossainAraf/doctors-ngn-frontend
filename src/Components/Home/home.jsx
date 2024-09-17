// IMPORT
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSpecifications } from '../../Services/apiService';
import Button from '../Button';
import DoctorSlider from './Slider';

// COMPONENT
const Home = () => {
  const [specifications, setSpecifications] = useState([]);

  // FETCH DATA using useEffect async await
  useEffect(() => {
    const loadSpecifications = async () => {
      const data = await fetchSpecifications();
      setSpecifications(data);
    };
    loadSpecifications(); // Call the function
  }, []); // Empty array to run only once

  // RETURN
  return (
    <div>
      <h1>Home</h1>
      <DoctorSlider specifications={specifications} />
      {specifications.length > 0 ? (
        <div>
          {specifications.map((spec) => (
            <Link key={spec.id} to={`/doctors/${spec.id}`}>
              <Button label={spec.name} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" />
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
