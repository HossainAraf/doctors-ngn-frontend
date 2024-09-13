// IMPORTS
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// DEFINE THE COMPONENT
const DoctorList = () => {
  const { specificationId } = useParams();
  // STATE
  const [doctors, setDoctors] = useState([]);
  // const [error, setError] = useState([]);

  // FETCH DATA
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`http://localhost:3000/specifications/${specificationId}/doctors`);

        if (!response.ok) {
          // eslint-disable-next-line no-template-curly-in-string
          throw new Error('Error: ${response.status} - ${response.statusText');
        }

        const data = await response.json();
        console.dir(data); // log full response

        // CONVERT SINGLE OBJECT TO AN ARRAY
        if (Array.isArray(data)) {
          setDoctors(data);
        } else {
          setDoctors([]); // Wrap the single object to an array
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, [specificationId]);

  return (
    <div>
      <h2>
        Doctors List for:
        {specificationId}
      </h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
};

// EXPORTS
export default DoctorList;
