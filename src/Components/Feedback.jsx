// Fetch all feedbacks from the database and display them in a table

// IMPORTS
import React, { useState, useEffect } from 'react';

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
  

};