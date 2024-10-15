import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createFeedback } from '../../Services/apiService';

const FeedbackForm = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newFeedback = {
      feedback: data.feedback,
      name: data.name,
      email: data.email,
    };
    const response = await createFeedback(newFeedback);
    if (response) {
      setFeedbacks([...feedbacks, response]);
      setIsSubmitted(true);
      // setTimeout(() => clearForm(), 1000);
    }
  };

  const clearForm = () => {
    reset();
    setIsSubmitted(false);
  };

  return (
    <div className="flex flex-col max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
      {isSubmitted && (
        <div className="alert alert-success" role="alert">
          <p>Your Feedback Submitted Successfully. Thanks!</p>
          <button type="button" className="bg-indigo1 text-white hover:bg-transparent hover:text-blue-700 p-1 mb-2 rounded" onClick={clearForm}>
            Close
          </button>
        </div>
      )}
      <form
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          name="feedback"
          placeholder="Feedback Message"
          className="border border-gray-400 rounded-md p-2 mb-2 min-h-[100px]"
          ref={register('feedback', { required: true }).ref}
          onChange={register('feedback', { required: true }).onChange}
          onBlur={register('feedback', { required: true }).onBlur}
        />
        {errors.feedback && (
          <span className="text-red-500 text-sm">Message is required</span>
        )}
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-gray-400 rounded-md p-2 mb-2"
          ref={register('name', { required: true }).ref}
          onChange={register('name', { required: true }).onChange}
          onBlur={register('name', { required: true }).onBlur}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">Name is required</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-400 rounded-md p-2 mb-2"
          ref={register('email', { required: true }).ref}
          onChange={register('email', { required: true }).onChange}
          onBlur={register('email', { required: true }).onBlur}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">Email is required</span>
        )}
        <button type="submit" className="bg-indigo1 text-white rounded-md p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
