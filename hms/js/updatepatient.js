let name=sessionStorage.getItem('username');
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
async function loaddata() {
    try {
       
        let name = sessionStorage.getItem('username');
        
        const response = await fetch('http://localhost:8080/PatientData/');
        

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
 
        const data = await response.json();
        
       
        const user = data.find(user => user.name === name);
        
        if (user) {
          
         document.getElementById('name').value = user.name;
         document.getElementById('email').value = user.email;
         document.getElementById('contact').value=user.contact;
         document.getElementById('address').value=user.address;
         document.getElementById('age').value=user.age;

        } else {
            console.error('User not found');
            document.getElementById('name').innerHTML = 'User not found';
        }
        
  
     
        
    
    } catch (error) {

        console.error('Error loading patient data:', error);
    }
}
loaddata();

async function updateprofile(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const newemail = document.getElementById('newemail').value
    if(newemail==="")
        {
            newemail.value=email
        }
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;
    const contact = document.getElementById('contact').value;
    const gender = document.getElementById('gender').value;

    const data = await fetchData();

    const existingUser = data.find(user => user.email === email);

    if (existingUser) {
        try {
            const response = await fetch(`http://localhost:8080/PatientData/${existingUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name,email:newemail, address: address, age:age, gender: gender, contact: contact})
            });
            if (response.ok) {
                alert("Data Updated Successfully");
            } else {
                console.error('Something Went wrong', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        alert("User not Present");
    }
}