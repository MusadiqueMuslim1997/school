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