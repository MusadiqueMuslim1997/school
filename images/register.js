 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBBPp4UKptJ7GVUNM15Tb8mAWeA_-OEui8",
   authDomain: "school-f7563.firebaseapp.com",
   projectId: "school-f7563",
   storageBucket: "school-f7563.firebasestorage.app",
   messagingSenderId: "764293806612",
   appId: "1:764293806612:web:5a10dc1cade67fda67c501"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
let register = () =>{
    
 createUserWithEmailAndPassword(auth, email.value, password.value)
 .then((userCredential) => {
   // Signed up 
   const user = userCredential.user;
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
 });

}
 let registerbtn = document.getElementById("register")
 registerbtn.addEventListener("click". register)