async function getDoctorDetails(e) {
    try {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/doctorinfo/");
        
        const responseData = await response.json();
           
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            let d;
        
        
            let isMatch = false;
            responseData.forEach(doctor => {
                if (doctor.email === username && doctor.pass === password) {
                
                    isMatch = true;
                   d=doctor.name;
                }
            });
            
            if (isMatch) {
                alert("Login Successful");
                sessionStorage.setItem('dname',d)
              
                window.location.href = "doctor-dashboard.html"; 
            } else {
                alert('Invalid email or password');
            }
       
    } catch (error) {
        console.error('Error:', error);
    }
}




    document.getElementById('log').addEventListener('click', getDoctorDetails);
       