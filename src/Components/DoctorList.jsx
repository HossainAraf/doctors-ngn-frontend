import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DoctorList = () => {
  const { specificationId } = useParams(); // Get the specification ID from the URL
  const [doctors, setDoctors] = useState([]);

  console.log(`Rendering DoctorList for specificationId: ${specificationId}`);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        console.log(`Fetching doctors for specificationId: ${specificationId}`);

        const response = await fetch(`http://localhost:3000/api/v1/specifications/${specificationId}/doctors`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.dir(data); // Log the full response

        // Convert single object to array if necessary
        if (Array.isArray(data)) {
          setDoctors(data); // Set doctors if the response is already an array
        } else {
          setDoctors([data]); // Wrap the single object in an array
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, [specificationId]);

  // Add log to ensure data is set
  console.log('Doctors:', doctors);

  return (
    <div>
      <h2>
        Doctors List for Specification:
        {specificationId}
      </h2>
      {doctors.length > 0 ? (
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              <h3>{doctor.name}</h3>
              <p>{doctor.designation}</p>
              <p>{doctor.degree}</p>
              <p>{doctor.contact}</p>
              <p>{doctor.chember}</p>
              <p>{doctor.time}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No doctors available.</p>
      )}
    </div>
  );
};

export default DoctorList;
