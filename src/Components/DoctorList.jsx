import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDoctorsBySpecificationId, fetchSpecifications } from '../Services/apiService';
// import Button from './Button';

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
        spec,
      ) => spec.id === parseInt(specificationId, 10)); // Find the specification by id
      setSpecificationName(specification?.name || 'Unknown Specification');
    };
    loadDoctors();
    loadSpecification();
  }, [specificationId]); // Fetch doctors and specification whenever specificationId changes

  return (
    <div className="flex flex-col px-3">
      <h2 className="my-2 font-semibold text-blue-700">
        {specificationName}
        &nbsp; বিশেষজ্ঞ ডাক্তারগণঃ
      </h2>
      <button
        className="bg-blue-500 text-white w-48 h-12 fixed bottom-9 right-0"
        onClick={() => window.location.href = 'tel:01949403199'}
      >
        সিরিয়ালের জন্য কল করুনঃ &nbsp; 01949-403199
      </button>

      {doctors.length > 0 ? (
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              <h3 className="text-orange-900 font-medium">
                # ডাঃ&nbsp;
                {doctor.name}
              </h3>
              <p>{doctor.designation}</p>
              <p className="text-green-900">{doctor.degree}</p>
              <p>{doctor.chember}</p>
              <p>{doctor.time}</p>
              <span className="flex font-thin">
                <p className="font-thin text-slate-200">{doctor.contact}</p>
              </span>
              <hr className="bg-indigo1 my-2" />
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
