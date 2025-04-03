import { auth, signInWithEmailAndPassword } from "./register.js";

// Ensure DOM elements are loaded after the DOM
document.addEventListener('DOMContentLoaded', () => {
    let email = document.getElementById("logemail");
    let password = document.getElementById("logpassword");
    let loginbtn = document.getElementById("loginbtn");

    // User login function
    let userlog = () => {
        // Check if email and password fields are not empty
        if (email.value === "" || password.value === "") {
            alert("Please enter both email and password.");
            return;
        }

        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed in successfully
                const user = userCredential.user;
                console.log("Logged in user:", user); // You can log user details
                window.location = "home.html"; // Redirect to home page
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error Code:", errorCode);
                console.error("Error Message:", errorMessage);

                // Display error message to user
                alert(`Login failed: ${errorMessage}`);
            });
    };

    // Event listener for login button
    loginbtn.addEventListener("click", userlog);
});
