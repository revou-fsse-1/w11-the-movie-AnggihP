const API_ENDPOINT = "http://localhost:3000";
var emailArray = [];
var passwordArray = [];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");

const createUser = async (newUserData) => {
    try {
      await axios.post(`${API_ENDPOINT}/users`, {
          username: newUserData.username,
          email: newUserData.email,
          password: newUserData.password,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  function register() {
      event.preventDefault();
    
      var inputUsername = document.getElementById("us").value;
      var inputEmail = document.getElementById("em").value;
      var inputpassword = document.getElementById("rp").value;
      var passwordRetype = document.getElementById("rrp").value;
    
      const validateLowerCase = /[a-z]/;
      const validateUpperCase = /^[A-Z][A-Za-z0-9]{1,11}$/;
      const validateNumber = /[0-9]/;
      const myRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z.]{2,5}$/;
    
      if (inputUsername == "") {
          alert("Username required.");
          return;
      }else if (inputEmail == "") {
        alert("Email required.");
        return;
      } else if (!myRegex.test(inputEmail)) {
        alert("Please input valid email");
      } else if (inputpassword == "") {
        alert("Password required.");
        return;
      } else if (!validateUpperCase.test(inputpassword)) {
        alert(
          "Please input password with min 1 Upper case"
        );
      } else if (passwordRetype == "") {
        alert("Password required.");
        return;
      } else if (inputpassword != passwordRetype) {
        alert("Password don't match retype your Password.");
        return;
      } else { createUsers({username: inputUsername, email: inputEmail, password: inputpassword});
      window.location.href = "index.html";

      }}