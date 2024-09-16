// FETCH SPECIFICATIONS
const fetchSpecifications = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/specifications');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching specifications:', error);
    return [];
  }
};

// FETCH DOCTORS
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
    console.error('Error fetching doctors:', error);
    return [];
  }
};

// EXPORTS
export { fetchSpecifications, fetchDoctorsBySpecificationId };
