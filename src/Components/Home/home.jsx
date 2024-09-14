// IMPORT
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// API URL
const apiUrl = 'http://localhost:3000/api/v1/specifications';

// COMPONENT
const Home = () => {
  const [data, setData] = useState([]);
  // const [error, setError] = useState(null);

  //  FETCH DATA FROM API using useEffect async await
  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          console.log('Response:', response);
          const data = await response.json();
          setData(data);
          console.log(data);
        } catch (error) {
          // setError(error);
        }
      };
      fetchData();
    },
    [],
  );

  // RETURN
  return (
    <div>
      <h1>Home</h1>
      {data.map((item) => (
        <div key={item.id}>
          <Link to={`/doctors/${item.id}`}>
            <button type="button">
              View Doctors for:
              {item.name}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

// EXPORT
export default Home;
