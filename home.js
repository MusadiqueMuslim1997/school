import { auth, onAuthStateChanged, signOut } from "./register.js";
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
let array = [
  {
    img: "./images/img1.png",
  },
  {
    img: "./images/img2.png",
  },
  {
    img: "./images/img3.png",
  },
  {
    img: "./images/img4.png",
  },
];

array.forEach((item) => {
  // console.log(item.img);
  cardContainer.innerHTML += ` <div class="card" id="card">
          <img src="${item.img}" alt="">
        </div>
`;
});

let cardIcon = document.getElementById("card-icon");
let iconArray = [
  {
    icon: `<i class="fa-solid fa-location-dot"></i>`,
    icon_head: "Select Location",
    icon_content: "Choose the location where your food will be delivered",
  },
  {
    icon: `<i class="fa-brands fa-first-order-alt"></i>`,
    icon_head: "Choose order",
    icon_content: "Check over hundreds of menus to pick your favorite food",
  },
  {
    icon: `<i class="fa-solid fa-comment-dollar"></i>`,
    icon_head: "Pay advanced",
    icon_content: "It's quick, safe, and simple. Select several methods of payment",
  },{
    icon: `<i class="fa-solid fa-medal"></i>`,
    icon_head: "Enjoy meals",
    icon_content: "Food is made and delivered directly to your home.",
  },
];
iconArray.forEach((element) => {
  console.log(element.icon);
  cardIcon.innerHTML += `
     <div class="card-icon" >
              <div class="icon-1">${element.icon}</div>
              <div class="icon-head">${element.icon_head}</div>
              <div class="icon-content">${element.icon_content}</div>
            </div>
  
  `;
});
