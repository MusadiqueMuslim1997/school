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
        text: "Please enter these input field!",
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
        title: "congratulation!",
        text: "You have login successfully!",
        icon: "success"
      });
    }

  }