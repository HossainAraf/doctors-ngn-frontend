// IMPORT
import React, { useState } from 'react';

// API URL
const API_url = 'http://localhost:3000/api/v1/specifications';

// COMPONENT
const Home = () => {
  const [ specifications, setSpecifications] = useState([]);
  const [ error, setError] = useState(null);
};

// EXPORT
export default Home;
