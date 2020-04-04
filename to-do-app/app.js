function onReady(){

const ADD_TODO_FORM = document.getElementById('addToDoForm');
const NEW_TODO_TEXT = document.getElementById('newToDoText');
const TODO_LIST = document.getElementById('toDoList');

ADD_TODO_FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  let title = NEW_TODO_TEXT.value;
if (title=="") {
  alert("Please enter task!");
  return;
}
let newLi = document.createElement('li');
let checkbox = document.createElement('input');
checkbox.type = "checkbox";

let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete!";

  deleteBtn.addEventListener('click', function (event){
      this.parentElement
      TODO_LIST.removeChild(this.parentElement);
      })
    newLi.textContent= title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value="";
  });
}
window.onload = function () {
  alert("The window has loaded!");
  onReady();
};
