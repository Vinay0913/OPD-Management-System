
async function fetchPatientData(name) {
    try {
      const response = await fetch(`http://localhost:8080/PatientData/search?name=${name}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  async function displayData(data) {
    const tableBody = document.getElementById('data');
    tableBody.innerHTML = '';

    if (Array.isArray(data) && data.length > 0) {
      data.forEach(patient => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${patient.id}</td>
          <td>${patient.name}</td>
          <td>${patient.email}</td>
          <td>${patient.address}</td>
          <td>${patient.contact}</td>
          <td>${patient.age}</td>
           <td>${patient.gender}</td>
           <td><button class="b" onclick="deleteappointment(${patient.id})">Delete</button></td>
        `;
        tableBody.appendChild(row);
      });
    } else {
      console.error('No patient found with that name or invalid data returned.');
      alert("No patient found with that name.");
    }
  }

  async function searchPatients() {
    const searchInput = document.getElementById('patientSearch').value.trim();
    if (searchInput === '') {
      alert("Please enter a name to search.");
      return;
    }

    const data = await fetchPatientData(searchInput);
    if (data.length === 0) {
      alert("No patient found with that name.");
      return;
    }
    const container = document.getElementById('tabs');
    container.style.display = 'block';
    displayData(data);
   
   
  }


  async function deleteappointment(id) {
    try { 
      const response = await fetch(`http://localhost:8080/PatientData/${id}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        alert("Data Deleted Successfully");
      } else {
        console.error('Failed to delete Appointment:', response.statusText);
      }
  
     
    } catch (error) {
      console.error('Error deleting Appointment:', error);
    }
  }