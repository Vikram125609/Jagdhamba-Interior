localStorage.clear();
let button = document.getElementById('btn');

button.addEventListener('click', Update);
function Update() {
     let textarea = document.getElementById('textarea');
     if(textarea.value == "")
     {
          alert('Please Enter Your Review');
     }
     let notes = localStorage.getItem('notes');
     if (notes == null) {
          var CreateArray = [];
          CreateArray.push(textarea.value);
          localStorage.setItem('notes', JSON.stringify(CreateArray))
          let str = "";
          CreateArray.forEach(function (index,elements) {
               str += `<div class="client_review"> ${index}
          <p>${elements}</p>
          <button class="delete">Delete</button>
     </div>`
          })
          let Comments = document.getElementById('Comments');
          Comments.innerHTML = str;
          textarea.value = "";
     }
     else {
          let string = localStorage.getItem('notes');
          CreateArray = JSON.parse(string);
          CreateArray.push(textarea.value);
          localStorage.setItem('notes', JSON.stringify(CreateArray));
     }
     var index = 1;
     let str = "";
     CreateArray.forEach(function (elements) {
          str += `<div class="client_review">
          <p>${index} : ${elements}</p>
          <button class="btn deleted" onclick="deleted(${this.index})">Delete</button>
     </div>`
     index++;
     })
     let Comments = document.getElementById('Comments');
     Comments.innerHTML = str;
     textarea.value = "";
};