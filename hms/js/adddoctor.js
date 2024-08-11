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
});

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

async function addDoctorDetails() {


try {
const data = await fetchData();
const special=document.getElementById('sp').value
const name=document.getElementById('name').value;
const email=document.getElementById('email').value;
const contact=document.getElementById('contact').value;
const date=document.getElementById('date').value;
const pass=document.getElementById('pass').value;
const cpass=document.getElementById('cpass').value;
const id = data.length + 1;
if (pass!==cpass) {
    alert("Password Doesnt Match");
    document.getElementById('pass').value="";
    document.getElementById('cpass').value="";

    return;
}
const response = await fetch("http://localhost:8080/doctorinfo", {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ id:id,special:special,name:name,email:email,contact:contact,date:date,pass:pass,cpass:cpass})
});

if (response.ok) {

alert("Data Added Successfully");
document.getElementById('sp').value="";
document.getElementById('name').value="";
document.getElementById('email').value="";
document.getElementById('contact').value="";
document.getElementById('date').value="";
document.getElementById('pass').value="";
document.getElementById('cpass').value="";
}


} catch (error) {
console.error('Error adding specialization:', error);
}
}
const form=document.getElementById('doctorForm');
form.addEventListener('submit', function (event) {
        event.preventDefault();
      addDoctorDetails();
     
    });