document.getElementById("show").addEventListener("change", function() {
    let passwordField = document.getElementById("password");
    
    // Check if the checkbox is checked
    if (this.checked) {
      // If checked, set the type to 'text' to show the password
      passwordField.type = "text";
    } else {
      // If unchecked, set the type back to 'password' to hide it
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
            window.location = "home.html";  // Redirect after OK button click
        }
    });
    }

  }