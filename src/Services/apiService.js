// FETCH SPECIFICATIONS
const fetchSpecifications = async () => {
  try {
    // console.log('Sending doctor data:', doctor); // Log the doctor data being sent

    const response = await fetch('http://localhost:3000//api/v1/specifications');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error('Error fetching specifications:', error);
    return [];
  }
};

// FETCH DOCTORS BY SPECIFICATION ID
const fetchDoctorsBySpecificationId = async (specificationId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/specifications/${specificationId}/doctors`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    // const data = await response.json();
    // if (Array.isArray(data)) {
    //   return data;
    // }
    // return [data];

    return await response.json();
  } catch (error) {
    // console.error('Error fetching doctors:', error);
    return [];
  }
};

// FETCH ALL DOCTORS
const fetchDoctors = async () => {
  const response = await fetch('http://localhost:3000/api/v1/doctors');
  const data = await response.json();
  return data;
};

// ADD NEW DOCTOR
const addDoctor = async (doctor) => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/doctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctor),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    // console.error('Error adding doctor:', error);
    return null;
  }
};

// FETCH Feedbacks
const fetchFeedbacks = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/user_feedbacks/index');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    // console.error('Error fetching feedbacks:', error);
    return [];
  }
};

// EXPORTS
export {
  fetchSpecifications, fetchDoctorsBySpecificationId, fetchDoctors, addDoctor, fetchFeedbacks,
};
