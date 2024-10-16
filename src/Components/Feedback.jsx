// IMPORTS
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchFeedbacks } from '../Services/apiService';
import Button from './Button';

// COMPONENT
const Feedback = () => {
  // STATE
  const [feedbacks, setFeedbacks] = useState([]);

  // FETCH FEEDBACKS ON COMPONENT MOUNT
  useEffect(() => {
    const getFeedbacks = async () => {
      const data = await fetchFeedbacks();
      setFeedbacks(data);
    };
    getFeedbacks();
  }, []);

  // JSX
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Feedback</h2>
      <Link to="/add-feedback">
        <Button label="Add new Feedback" className="bg-transparent hover:bg-indigo1 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-1 my-1 border border-blue-500 hover:border-transparent rounded" />
      </Link>
      <div className="w-1/2">
        {feedbacks.map(({
          id, feedback, name, email, phone, created_at,
        }) => {
          const date = new Date(created_at);
          const localDateTime = date.toLocaleString();
        // CHANGE THE DATE FORMAT TO DD/MM/YYYY
        // Split the date and time
        const [datePart, timePart] = localDateTime.split(', ');
        // Change the date format to DD/MM/YYYY
        const dateParts = datePart.split('/');
        const formattedDate = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;
        // Join the date and time
        const formattedDateTime = `${formattedDate} ${timePart}`;

          return (
            <div key={id} className="bg-white shadow-md p-4 mb-4">
              <p>{feedback}</p>
              <h3 className="text-green-600">
                {name}
              </h3>
              <h4 className="text-green-600">{email}</h4>
              <h4 className="text-green-600">{phone}</h4>
              <p className="text-green-600">{formattedDateTime}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// EXPORTS
export default Feedback;
