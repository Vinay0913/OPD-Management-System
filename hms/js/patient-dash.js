const image = document.getElementById('myimg');
const usernameDisplay = document.getElementById('usernameDisplay');


function displayUsername() {
  usernameDisplay.textContent = sessionStorage.getItem('username'); 
  usernameDisplay.style.display = 'block';
}

function hideUsername() {
  usernameDisplay.style.display = 'none';
}


image.addEventListener('mouseover', displayUsername);
image.addEventListener('mouseout', hideUsername);