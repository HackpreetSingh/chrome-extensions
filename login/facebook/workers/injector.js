var username = "Your Username";
var password = "Your Password";

document.getElementById("login_field").value=username;
document.getElementById("password").value=password;

document.querySelector('.btn.btn-primary.btn-block.js-sign-in-button').click();

console.log(username);
console.log(password);

alert(username);