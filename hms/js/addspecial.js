async function fetchData() {
    try {
      const response = await fetch("http://localhost:8080/specialization/");
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

    data.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.special}</td>
        <td><button onclick="deleteSpecialization(${item.id})">Delete</button></td>
      `;
      tableBody.appendChild(row);
    });
  }

  async function addSpecialization() {
const specializationInput = document.getElementById('d').value;
    if(!specializationInput)
    {
      alert("Enter the Specialization");
      return;
    }
try {
  const data = await fetchData();
  let exists = false;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (specializationInput.toLowerCase() === item.special.toLowerCase()) {
      exists = true;
      break; 
    } else if (specializationInput === item.special.toLowerCase()) {
      exists = true;
      break; 
    }
  }

  if (exists) {
    alert("Specialization Already Exists");
    return; 
  }

  const id = data.length + 1;

  const response = await fetch("http://localhost:8080/specialization", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id.toString(), special: specializationInput })
  });

  if (!response.ok) {
    throw new Error('Failed to add specialization');
  }

 
  displayData();
} catch (error) {
  console.error('Error adding specialization:', error);
}
}



  async function deleteSpecialization(id) {
try {
  const response = await fetch(`http://localhost:8080/specialization/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    alert("Data Deleted Successfully");
  } else {
    console.error('Failed to delete specialization:', response.statusText);
  }

  displayData();
} catch (error) {
  console.error('Error deleting specialization:', error);
}
}

  document.getElementById('add').addEventListener('click', addSpecialization);
  displayData();