// IMPORTS
import React, { useState, useEffect } from 'react';

// DEFINE THE COMPONENT
const DoctorList = ({ specificationId }) => {
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

};