async function fetchData() {
    try {
      const response = await fetch("http://localhost:8080/doctorinfo/");
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

    data.forEach((doctor, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${doctor.id}</td>
        <td>${doctor.special}</td>
        <td>${doctor.name}</td>
        <td>${doctor.email}</td>
        <td>${doctor.contact}</td>
        <td>${doctor.date}</td>
        <td>${doctor.pass}</td>
        <td>${doctor.cpass}</td>
        <td><button onclick="deletedoctor(${doctor.id})">Delete</button></td>
   
      `;
      tableBody.appendChild(row);
    });
  }
  async function deletedoctor(id) {
try {
  const i=id.toString();
  const response = await fetch(`http://localhost:8080/doctorinfo/${i}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    alert("Data Deleted Successfully");
  } else {
    console.error('Failed to delete Doctor Data:', response.statusText);
  }

  displayData();
} catch (error) {
  console.error('Error deleting specialization:', error);
}
}

displayData();