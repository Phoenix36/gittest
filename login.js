const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function(event) {
  event.preventDefault(); // prevent form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // do some validation
  if (username === "admin" && password === "password") {
    alert("Login successful");
    window.location.href = "dashboard.html";
  } 
  else {
    alert("Invalid username or password");
  }

  if(username === "Pheonix"&& password === "Yo"){
    alert("Login Successful");
    window.location.href = "dashboard.html";
  }
  else{
    alert("Invalid Username or Password")
  }
});

