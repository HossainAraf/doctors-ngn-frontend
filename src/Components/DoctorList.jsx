import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDoctorsBySpecificationId } from '../Services/apiService';

const DoctorList = () => {
  const { specificationId } = useParams(); // Get the specification ID from the URL
  const [doctors, setDoctors] = useState([]);

  // console.log(`Rendering DoctorList for specificationId: ${specificationId}`);

  useEffect(() => {
    const loadDoctors = async () => {
      const data = await fetchDoctorsBySpecificationId(specificationId);
      setDoctors(data);
    };
    //     // Convert single object to array if necessary
    //     if (Array.isArray(data)) {
    //       setDoctors(data); // Set doctors if the response is already an array
    //     } else {
    //       setDoctors([data]); // Wrap the single object in an array
    //     }

    loadDoctors();
  }, [specificationId]); // Refresh the list when the specificationId changes

  // Add log to ensure data is set
  // console.log('Doctors:', doctors);

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
