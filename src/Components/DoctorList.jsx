// IMPORTS
import React, { useState, useEffect } from 'react';

// DEFINE THE COMPONENT
const DoctorList = ({ specificationId }) => {
  // STATE
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState([]);
  
