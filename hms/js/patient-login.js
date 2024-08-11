
const container = document.getElementById('con');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


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

async function addPatientDetails(e) {
    e.preventDefault();

    try {
        const data = await fetchData();
        const pname = document.getElementById('pname').value;
        const pemail = document.getElementById('pemail').value;
        const address = document.getElementById('address').value;
        const gender = document.getElementById('gender').value;
        const contact = document.getElementById('contact').value;
        const age = document.getElementById('age').value;
        const ppass = document.getElementById('ppass').value;
        const cpass = document.getElementById('cpass').value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(ppass!=cpass)
        {   alert("Password Does not Match")
            return[];
        }

        if (!pname || !pemail || !ppass || !cpass||!address||!age ||!contact) {
            alert("Please fill in all required fields.");
            return;
        }
        if (!emailRegex.test(pemail)) {
        alert("Please enter a valid email address.");
        document.getElementById('pemail').value="";
        return;
    }
        if (!passwordRegex.test(ppass) ) {
            alert("Password must start with a capital letter, contain numbers, include the '@' symbol, and be at least 8 characters long.");
            document.getElementById('ppass').value="";
            document.getElementById('cpass').value="";
            return;
    }
       

        const existingUser = data.find(user => user.email === pemail);
        if (existingUser) {
            alert("User already exist.");
            document.getElementById('pemail').value="";
            
            return;
        }
        const existingpass = data.find(user => user.password.toString() === ppass.toString());
        if (existingpass) {
            alert(" choose a different Password.");
            document.getElementById('ppass').value="";
            return;
        }

        const id = data.length+1;

        const response = await fetch("http://localhost:8080/PatientData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id.toString(), name: pname, email: pemail,address:address,contact:contact,gender:gender,age:age ,password: ppass,confirm:cpass })
        });

        if (response.ok) {
            alert("Signup Successful");
        } else {
            alert("Signup Failed");
        }
    } catch (error) {
        console.error('Error adding patient details:', error);
        alert("Error: Signup Failed");
    }
}

fetch('http://localhost:8080/PatientData/').then((data)=>data.json()).then((data)=>console.log(data))


    async function getPatientDetails(e) {
    try {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/PatientData/");
      
      
        const responseData = await response.json();
  
      
        
            const inputEmail = document.getElementById('email').value;
            const inputPassword = document.getElementById('password').value;
            const exuser = responseData.find(user => user.email.toString() === inputEmail.toString());
            let myname;
            if (!exuser) {
                alert("User not found Please Sign-up");
                document.getElementById('email').value="";
                return;
            }

          
            let isMatch = false;
            responseData.forEach(patient => {
                if (patient.email === inputEmail && patient.password ,inputPassword) {
                
                    isMatch = true;
                    myname=patient.name
                    
                }
            });
            
            if (isMatch) {
                alert("Login Successful");
                sessionStorage.setItem('username',myname);
                window.location.href='patient-dashboard.html'
                
    
           
    

            } else {
                alert('Invalid email or password');
            }
       
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('signin').addEventListener('click', getPatientDetails);


    document.getElementById('signup').addEventListener('click', addPatientDetails);