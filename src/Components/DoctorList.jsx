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
        setDoctors(response.data);
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
