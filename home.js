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
