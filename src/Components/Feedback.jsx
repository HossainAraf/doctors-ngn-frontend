// Fetch all feedbacks from the database and display them in a table

// IMPORTS
import React, { useState, useEffect } from 'react';
import { fetchFeedbacks } from '../Services/apiService';

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
      <table className="border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Email</th>
            <th className="border border-gray-400 p-2">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.id}>
              <td className="border border-gray-400 p-2">{feedback.name}</td>
              <td className="border border-gray-400 p-2">{feedback.email}</td>
              <td className="border border-gray-400 p-2">{feedback.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// EXPORTS
export default Feedback;
