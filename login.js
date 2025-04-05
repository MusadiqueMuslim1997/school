import { auth, signInWithEmailAndPassword } from "./register.js";

document.addEventListener('DOMContentLoaded', () => {
    let email = document.getElementById("logemail");
    let password = document.getElementById("logpassword");
    let loginbtn = document.getElementById("loginbtn");

    let userlog = () => {
       
        if (email.value === "" || password.value === "") {
            alert("Please enter both email and password.");
            return;
        }

        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
               
                const user = userCredential.user;
                console.log("Logged in user:", user); 
             
                window.location = "home.html"; 
            })
            .catch((error) => {
                
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error Code:", errorCode);
                console.error("Error Message:", errorMessage);
                Swal.fire({
                    icon: "error",
                    title: "Error...",
                    text: `${errorMessage}`,
                   
                  });
                                // alert(`Login failed: ${errorMessage}`);
            });
    };

   
    loginbtn.addEventListener("click", userlog);
});
