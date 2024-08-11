async function fetchData() {
  try {
    const response = await fetch("http://localhost:8080/PatientData/");
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

async function displayData() {
  const data = await fetchData();
  const tableBody = document.getElementById('data');
  tableBody.innerHTML = '';

  data.forEach((patient) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${patient.id}</td>
      <td>${patient.name}</td>
      <td>${patient.email}</td>
      <td>${patient.address}</td>
      <td>${patient.contact}</td>
      <td>${patient.gender}</td>
      <td>${patient.age}</td>
      <td><button onclick="deletePatient(${patient.id})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

async function deletePatient(id) {
  try {
    const response = await fetch(`http://localhost:8080/PatientData/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      alert("Data Deleted Successfully");
    } else {
      console.error('Failed to delete patient data:', response.statusText);
    }

    displayData(); // Refresh the data
  } catch (error) {
    console.error('Error deleting patient data:', error);
  }
}

// Initial call to display data
displayData();
