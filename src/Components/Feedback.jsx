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
      <div className="w-1/2">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="bg-white shadow-md p-4 mb-4">
            <p>{feedback.feedback}</p>
            <h3 className="text-xl">{feedback.name}</h3>
            <h4 className="text-lg">{feedback.email}</h4>
            <h4 className="text-lg">{feedback.phone}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

// EXPORTS
export default Feedback;
