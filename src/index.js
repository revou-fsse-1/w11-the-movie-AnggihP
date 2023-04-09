const API_ENDPOINT = "http://localhost:3000/users";

var usernameArray = [];
var passwordArray = [];

var loginBox = document.getElementById("login");

const checkData = (
  (e) => e.username === inputUsername && e.password === inputpassword
);

fetch(API_ENDPOINT, checkData)
.then((response) => response.text())
.then((result) => console.log(result))
.catch((error) => console.log("error", error));


function login() {
  event.preventDefault();
  
  var inputUsername = document.getElementById("us").value;
    var inputpassword = document.getElementById("rp").value;
  

  if (inputUsername == "") {
    alert("Username required.");
    return;
  } else if (inputpassword == "") {
    alert("Password required.");
    return;
  } else if (checkData === undefined) {
    alert("Please register first. Thankyou.");
  } else if (checkData !== undefined) {
    alert("Login successful! Welcome.");
    window.location.href = "homepage.html";
  }
}
