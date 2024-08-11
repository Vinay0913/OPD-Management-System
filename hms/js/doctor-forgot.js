

document.getElementById('reset').addEventListener('click', function(event) {
    event.preventDefault();
    updatepassword();

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
 
async function updatepassword() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('newpassword').value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;

    if (!passwordRegex.test(password)) {
        alert("Password must start with a capital letter, contain numbers, include the '@' symbol, and be at least 8 characters long.");
        return;
    }

    const data = await fetchData();

    const existingUser = data.find(user =>user.email === username);
console.log(existingUser.id);
console.log(data)
    if (existingUser) {
        try {
            const response = await fetch(`http://localhost:8080/doctorinfo/${existingUser.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ pass: password, cpass: password })
            });
            if (response.ok) {
                alert("Password Updated Successfully");
                document.getElementById('username').value="";
                document.getElementById('newpassword').value="";
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