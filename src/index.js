const API_ENDPOINT = "http://localhost:3000";
var emailArray = [];
var passwordArray = [];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");

const getAllUser = async (username) => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/users?q=${username}`

    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};


  function login() {
    event.preventDefault();
      
        var inputusername = document.getElementById("se").value;
        var inputpassword = document.getElementById("sp").value;
      
        var i = usernameArray.indexOf(inputusername);
      
        if (eusernameArray.indexOf(inputusername) == -1) {
          if (inputusername == "") {
            alert("Username is required.");
            return;
          }
          alert("Username does not exist.");
          return;
        } else if (passwordArray[i] != inputpassword) {
          if (inputpassword == "") {
            alert("Password required.");
            return;
          }
          alert("Password does not match.");
          return;
        } else {
          (getAllUser !== undefined); {
          alert(inputusername + " yor are login Now \n welcome to our website.");
          window.location.href = "homepage.html";
          }
        }
      }