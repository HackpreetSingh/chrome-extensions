var username;
var password;

fetch("http://192.168.137.1:8080/creds.json")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        username = json.username;
        password = json.password;
    });


console.log(username);
console.log(password);

document.getElementById("login_field").value=username;
document.getElementById("password").value=password;

// document.querySelector('.btn.btn-primary.btn-block.js-sign-in-button').click();

alert(username);