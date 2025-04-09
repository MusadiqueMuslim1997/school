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
    icon_content:
      "It's quick, safe, and simple. Select several methods of payment",
  },
  {
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
let hero_3_card_sec = document.getElementById("hero3-card-sec");
let herro3Array = [
  {
    image: "./images/1.png",
  },
  {
    image: "./images/2.png",
  },
  {
    image: "./images/3.png",
  },
  {
    image: "./images/4.png",
  },
  {
    image: "./images/5.png",
  },
];

herro3Array.forEach((element3) => {
  hero_3_card_sec.innerHTML += `
 <div class="hero3-card"><img src="${element3.image}" alt=""></div>
`;
});
let hero_4_card_sec = document.getElementById("hero4-card-sec");
let herro4Array = [
  {
    image: "./images/im1.png",
  },
  {
    image: "./images/im2.png",
  },
  {
    image: "./images/im3.png",
  },
  {
    image: "./images/im4.png",
  },
  {
    image: "./images/im5.png",
  },
  {
    image: "./images/im6.png",
  },
  {
    image: "./images/im7.png",
  },
  {
    image: "./images/im8.png",
  },
];

herro4Array.forEach((element4) => {
  hero_4_card_sec.innerHTML += `
 <div class="card margin"><img src="${element4.image}" alt=""></div>
`;
});