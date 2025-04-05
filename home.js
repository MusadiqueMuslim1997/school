import {auth, onAuthStateChanged,signOut} from "./register.js"
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(user);
      
      // ...
    } else {
        // User is signed out
      // ...
    }
});


let userSignOut = document.getElementById("userlog");

let logout = () => {
    signOut(auth)
      .then(() => {
        window.location = "index.html";
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });

    
   };

userSignOut.addEventListener("click", logout);



  
let cardContainer = document.getElementById("card");
let array =[
    {
        img:"./images/img1.png"
    },
    {
        img:"./images/img2.png"
    },
    {
        img:"./images/img3.png"
    },
    {
        img:"./images/img4.png"
    },
]


array.forEach(item => {
    console.log(item.img);
    cardContainer.innerHTML+=` <div class="card" id="card">
          <img src="${item.img}" alt="">
        </div>
`
});