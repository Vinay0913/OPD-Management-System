async function fetchData() {
    try {
      const response = await fetch("http://localhost:8080/BookAppointmentData/");
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; 
    }
  }
  let count=1;
  async function displayAppointmentsForPatient(name) {
    try {
      const appointments = await fetchData();
    

      
      
      const appointmentsForPatient = appointments.filter(appointment => appointment.pname === name);
      console.log(appointmentsForPatient)
     
      const tableBody = document.getElementById('data');
      tableBody.innerHTML = '';

      appointmentsForPatient.forEach((appointment, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${count++}</td>
          <td>${appointment.specialization}</td>
          <td>${appointment.dname}</td>
          <td>${appointment.pname}</td>
          <td>${appointment.pcontact}</td>
          <td>${appointment.date}</td>
          <td>${appointment.time}</td>
          <td><button class="btn btn-dark" onclick="deleteAppointment(${appointment.id})">Delete</button></td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Error fetching/displaying appointments:', error);
      alert("Failed to fetch/display appointments");
    }
  }

  async function deleteAppointment(id) {
    try {
      const response = await fetch(`http://localhost:8080/BookAppointmentData/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        alert("Appointment Deleted Successfully");
        displayAppointmentsForPatient(name);
      } else {
        console.error('Failed to delete Appointment:', response.statusText);
      }

    } catch (error) {
      console.error('Error deleting Appointment:', error);
      alert("Failed to delete appointment");
    }
  }

  const name = sessionStorage.getItem('username').trim();
  console.log(name)
  displayAppointmentsForPatient(name);