import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDoctorsBySpecificationId, fetchSpecifications } from '../Services/apiService';

const DoctorList = () => {
  const { specificationId } = useParams(); // Get the specification ID from the URL
  const [doctors, setDoctors] = useState([]);
  const [specificationName, setSpecificationName] = useState(''); // State to store the specification name

  useEffect(() => {
    const loadDoctors = async () => {
      const doctorsData = await fetchDoctorsBySpecificationId(specificationId);
      setDoctors(doctorsData);
    };

    const loadSpecification = async () => {
      const specificationsData = await fetchSpecifications(); // Fetch all specifications
      const specification = specificationsData.find((
        spec) => spec.id === parseInt(specificationId, 10)); // Find the specification by id
      setSpecificationName(specification?.name || 'Unknown Specification');
    };
    loadDoctors();
    loadSpecification();
  }, [specificationId]); // Fetch doctors and specification whenever specificationId changes

  return (
    <div className="bg-gray">
      <h2>
        {specificationName}
        &nbsp; বিশেষজ্ঞ ডাক্তারগণঃ
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
