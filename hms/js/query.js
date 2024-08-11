async function fetchData() {
    try {
      const response = await fetch("http://localhost:8080/queries/");
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

    data.forEach((query, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${query.id}</td>
        <td>${query.name}</td>
        <td>${query.email}</td>
        <td>${query.phone}</td>
        <td>${query.subject}</td>
        <td>${query.message}</td>
       
        <td><button onclick="deletequery(${query.id})">Delete</button></td>
   
      `;
      tableBody.appendChild(row);
    });
  }
  async function deletequery(id) {
try {
  const i=id.toString();
  const response = await fetch(`http://localhost:8080/queries/${i}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    alert("Data Deleted Successfully");
  } else {
    console.error('Failed to delete query Data:', response.statusText);
  }

  displayData();
} catch (error) {
  console.error('Error deleting Query:', error);
}
}

displayData();