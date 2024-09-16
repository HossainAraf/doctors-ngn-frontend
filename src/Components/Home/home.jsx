// IMPORT
import React, { useState, useEffect } from 'react';
import { fetchSpecifications } from '../../Services/apiService';

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
      {specifications.length > 0 ? (
        <div>
          {specifications.map((spec) => (
            <button key={spec.id} type="button">
              {spec.name}
            </button>
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
