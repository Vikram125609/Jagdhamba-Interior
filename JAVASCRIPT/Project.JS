var Image_Collection = ['./Images/image1.jpg', './Images/image2.jpg', './Images/image3.jpg', './Images/image4.jpg', './Images/image5.jpg', './Images/image6.jpg', './Images/image7.jpg'];
var Image_Description = ["Linkedin Head Office","Meeting Rooms","Lobby Gallery","Dinning Room","Casual Discussion","Project Development","Playing Room"];
let image = document.querySelector('.Project-3 #Image');
let Description = document.getElementById('Description');
let Counter = 0;
let Next = document.getElementById('Next');
let Prev = document.getElementById('Prev');

Next.addEventListener('click',Forward);
Prev.addEventListener('click',Backward);
function Forward() {
     Counter++;
     if(Counter == Image_Collection.length)
     {
          Counter = 0;
     }
     Description.innerText = Image_Description[Counter];
     image.setAttribute('src', `${Image_Collection[Counter]}`);
};
function Backward() {
     Counter--;
     if(Counter == -1)
     {
          Counter = Image_Collection.length - 1;
     }
     Description.innerText = Image_Description[Counter];
     image.setAttribute('src', `${Image_Collection[Counter]}`);
};
setInterval(Forward,5000);