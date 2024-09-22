// IMPORTS
import React, { useState, useEffect } from 'react';
import { addDoctor, fetchSpecifications } from '../../Services/apiService';

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
      console.log('Specifications set in state:', data);
      setSpecifications(data);
    };
    getSpecifications();
  }, []);

  // EVENT HANDLERS
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDoctor = await addDoctor({ doctor: formData }); // Wrap in an object with a `doctor` key
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
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
        <input
          type="text"
          id="degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="designation">Designation:</label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="chember">Chember:</label>
        <input
          type="text"
          id="chember"
          name="chember"
          value={formData.chember}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="text"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Doctor</button>
    </form>
  );
};

export default DoctorForm;
