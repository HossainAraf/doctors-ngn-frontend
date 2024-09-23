/* eslint-disable jsx-a11y/label-has-associated-control */
// IMPORTS
import React, { useState, useEffect } from 'react';
import { addDoctor, fetchSpecifications } from '../../Services/apiService';
import BanglaInput from '../BanglaInput';
import '../../Styles/Form/addDoctor.css';

// COMPONENT
const DoctorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    specification_id: '',
    display_order: '',
    degree: '',
    designation: '',
    chember: '',
    time: '',
    contact: '',
  });

  // DEFINE STATE FOR SPECIFICATIONS
  const [specifications, setSpecifications] = useState([]);
  // FETCH SPECIFICATIONS ON COMPONENT MOUNT
  useEffect(() => {
    const getSpecifications = async () => {
      const data = await fetchSpecifications();
      // console.log('Specifications set in state:', data);
      setSpecifications(data);
    };
    getSpecifications();
  }, []);

  // EVENT HANDLERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDoctor = await addDoctor({
      doctor: formData,
    }); // Wrap in an object with a `doctor` key
    if (newDoctor) {
      alert('Doctor added successfully!');
      setFormData({
        name: '',
        specification_id: '',
        display_order: '',
        degree: '',
        designation: '',
        chember: '',
        time: '',
        contact: '',
      });
    } else {
      alert('Failed to add doctor.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-9">
      <div className="w-full">
        <label htmlFor="name">Doctor&apos;s Name:</label>
        <BanglaInput
          className="w-full"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="my-4">
        <label htmlFor="specification_id">Specification:</label>
        <select
          id="specification_id"
          name="specification_id"
          value={formData.specification_id}
          onChange={handleChange}
          required
        >
          <option value="">Select a specification</option>
          {specifications.map((specification) => (
            <option key={specification.id} value={specification.id}>
              {specification.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="display_order">Display Order:</label>
        <input
          type="number"
          id="display_order"
          name="display_order"
          value={formData.display_order}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="degree">Degree:</label>
        <BanglaInput
          className="w-full"
          type="text"
          id="degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="designation">Designation:</label>
        <BanglaInput
          className="w-full"
          type="text"
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="chember">Chember:</label>
        <BanglaInput
          className="w-full"
          type="text"
          id="chember"
          name="chember"
          value={formData.chember}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <BanglaInput
          type="text"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          className="my-2"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>
      <button className="text-green-700 my-3" type="submit">Add Doctor</button>
    </form>
  );
};

export default DoctorForm;
