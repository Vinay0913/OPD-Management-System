function check(e) {
    e.preventDefault();
    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    if (username === "admin" && password === "admin123") {
        alert("Login Successfull")
        window.location.href = "admin-dashborad.html";
    } else {
        alert("Wrong username or password");
    }
}