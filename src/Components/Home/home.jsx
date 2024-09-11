// IMPORT
import React, { useState, useEffect } from 'react';

// API URL
const API_url = 'http://localhost:3000/api/v1/specifications';

// COMPONENT
const Home = () => {
  const [ data,  setData] = useState([]);
  const [ error, setError] = useState(null);

//  FETCH DATA FROM API using useEffect async await
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(API_url);
      const data = await response.json();
      setSpecifications(data);
    } catch (error) {
      setError(error);
    }
  };
  fetchData();
}
, []);

// EXPORT
export default Home;
