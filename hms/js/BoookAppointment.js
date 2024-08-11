const today = new Date().toISOString().split('T')[0];


document.getElementById('date').setAttribute('min', today);

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
    document.addEventListener('DOMContentLoaded', function () {
          
          fetch('http://localhost:8080/specialization/')
              .then(response => response.json())
              .then(data => {
                  const selectElement = document.getElementById('sp');

                  
                  selectElement.innerHTML = '';

                
                  data.forEach(item => {
                      const option = document.createElement('option');
                      option.value = item.special;
                      option.textContent = item.special;
                      selectElement.appendChild(option);
                  });
              })
              .catch(error => console.error('Error fetching data:', error));



              fetch('http://localhost:8080/doctorinfo/')
              .then(response => response.json())
              .then(data => {
                  const selectElement = document.getElementById('doc');

                  
                  selectElement.innerHTML = '';

                
                  data.forEach(item => {
                      const option = document.createElement('option');
                      option.value = item.name;
                      option.textContent = item.name;
                      selectElement.appendChild(option);
                  });
              })
              .catch(error => console.error('Error fetching data:', error));
      }
    
    
    );

      async function bookappointment() {
        const response=await fetchData();
   
        const id=response.length+1;
          const specialization = document.getElementById('sp').value;
          const doctorName = document.getElementById('doc').value;
          const patientName = document.getElementById('pname').value;
          const contact = document.getElementById('pcontact').value;
          let dateInput = document.getElementById('date').value;

        
            let date = new Date(dateInput);

           
           let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

      
            day = day < 10 ? '0' + day : day;
            month = month < 10 ? '0' + month : month;

            let formattedDate = `${day}-${month}-${year}`;
          const timeSlot = document.getElementById('timeSlot').value;
        

          const appointmentData = {
            id:id.toString(),
              specialization: specialization,
              dname: doctorName,
              pname: patientName,
              pcontact: contact,
              date: formattedDate,
              time: timeSlot
          };
        
          const doctorAppointments = response.filter(appointment => appointment.dname === doctorName && appointment.date===date);
          console.log(doctorAppointments)
          if (doctorAppointments.length>=20) {
              alert("Doctor's appointment slots are full. Please choose another Date ");
              return; 
          }


          try {
              const response = await fetch("http://localhost:8080/BookAppointmentData", {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(appointmentData)
              });

              if (response.ok) {
               alert("AppointMent Booked Successfully")
              } 
              else
              {
                throw new Error('Failed to book appointment'); 
              }
            
             
             
          } catch (error) {
              console.error('Error booking appointment:', error);
              alert("Failed to book appointment");
          }
        
    
      }

     

      const form = document.getElementById('bookForm');
      form.addEventListener('submit', function(event) {
          event.preventDefault();
          
       bookappointment();
      
      
         
      });

