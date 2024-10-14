// FEEDBACK FORM COMPONENT
// This component is used to render the feedback form
// It contains the form fields and the submit button
// It also contains the form validation logic

// IMPORTS
import React, { useState } from 'react';
import { fetchFeedbacks } from '../../Services/apiService';
// import form from tailwindcss
import { useForm } from 'react-hook-form';

// COMPONENT
const FeedbackForm = () => {
  // STATE
  const [feedbacks, setFeedbacks] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  // HANDLERS
  const onSubmit = async (data) => {
    // console.log(data);
    const newFeedback = {
      feedback: data.feedback,
      name: data.name,
      email: data.email,
    };
    const response = await fetchFeedbacks(newFeedback);
    if (response) {
      setFeedbacks([...feedbacks, response]);
    }
  };

  // JSX
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-gray-400 rounded-md p-2 mb-2"
          ref={register({ required: true })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">Name is required</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-400 rounded-md p-2 mb-2"
          ref={register({ required: true })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">Email is required</span>
        )}
        <textarea
          name="message"
          placeholder="Message"
          className="border border-gray-400 rounded-md p-2 mb-2"
          ref={register({ required: true })}
        />
        {errors.message && (
          <span className="text-red-500 text-sm">Message is required</span>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};