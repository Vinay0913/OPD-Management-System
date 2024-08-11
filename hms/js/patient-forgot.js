
document.getElementById('reset').addEventListener('click',function(e){
  e.preventDefault();
  updatepassword();
})

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
async function updatepassword() {

    const username=document.getElementById('username').value.toString();
    const password=document.getElementById('newpassword').value.toString();
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;
    const data=await fetchData();
    if (!passwordRegex.test(password) ) {
            alert("Password must start with a capital letter, contain numbers, include the '@' symbol, and be at least 8 characters long.");
            document.getElementById('ppass').value="";
            return;
        }
    const existingUser = data.find(user => user.email === username);
   
        if (existingUser) {
          try{
            const response = await fetch(`http://localhost:8080/PatientData/${existingUser.id}`, {
      method: 'PATCH',
      headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: password,confirm:password})
    });
    if (response.ok) {
      alert("Password Updated Successfully");
      document.getElementById('username').value="";
     document.getElementById('newpassword').value="";

    } else {
      console.error('Something Went wrong', response.statusText);
    }


          }
          catch (error) {
    console.error('Error :', error);
  }
        }
        else
        {
            alert("User not Present")
        }
    }