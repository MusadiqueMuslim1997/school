document.getElementById("show").addEventListener("change", function() {
    let passwordField = document.getElementById("logpassword");
    
  
    if (this.checked) {
      
      passwordField.type = "text";
    } else {
     
      passwordField.type = "password";
    }
  });
  document.getElementById("show").addEventListener("change", function() {
    let passwordField = document.getElementById("signpassword");
    
   
    if (this.checked) {
    
      passwordField.type = "text";
    } else {
      
      passwordField.type = "password";
    }
  });
  
  function validInput(){
    let passwordField = document.getElementById("password").value;
    let email = document.getElementById("inp").value;
    if(passwordField ===""||email===""){
      Swal.fire({
        icon: "error",
        text: "Please fill input field!",
      });
    }
    else if(passwordField.length<6){
      Swal.fire({
        icon: "error",
        text: "Please enter atleast 6 digits password!",
      });

    }
    else{
      Swal.fire({
        title: "Congratulations!",
        text: "You have log in successfully!",
        icon: "success"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = "home.html";  
        }
    });
    }

  }
  function signup(){
    window.location = "signup.html"
  }