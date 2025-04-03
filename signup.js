import { auth, createUserWithEmailAndPassword } from "./register.js";


let email = document.getElementById("signemail");
let password = document.getElementById("signpassword");
let registerbtn = document.getElementById("registerbtn");


let register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
           
            const user = userCredential.user;
            console.log("User Created:", user);
            
            window.location = "index.html"; 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error Code:", errorCode);
            console.error("Error Message:", errorMessage);

           
            alert(`Error: ${errorMessage}`);
        });
    console.log(email.value);
    
}

registerbtn.addEventListener("click", register);


let loginnew = document.getElementById("login_new");
let loginform = () =>{
    window.location = "index.html"
}
loginnew.addEventListener("click",loginform)