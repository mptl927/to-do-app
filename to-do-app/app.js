function onReady() {
}
const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementById('toDoList');
const addDelete =document.getElementById('addDelete')
addToDoForm.addEventListener('submit', () => {
event.preventDefault();
let title = newToDoText.value;
if (title=="") {
  alert("Please enter task, idiot.");
  return;
}
let newLi = document.createElement('li');
let checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.classList.add("check")
newLi.textContent = title;
newLi.appendChild(checkbox);
toDoList.appendChild(newLi);
newToDoText.value = '';
});
addDelete.addEventListener('submit', () => {
  event.preventDefault();
  let children = Array.from(toDoList.children);
  children.forEach(function(li) {
    let input = li.children[0];
    if (input.checked) {
      li.remove();
    }
  });
})
window.onload = function () {
  alert("The window has loaded!");
  onReady();
};
