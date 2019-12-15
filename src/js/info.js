const buttons = todoList.querySelectorAll('li button');
console.log(buttons)
function countTodoList() {
  const length = todos.length;
  console.log(length);
  infoTotal.innerText = length;
}

function init() {
  window.addEventListener('load', countTodoList);
  todoForm.addEventListener('submit', countTodoList);
  Array.from(buttons).forEach(button => button.addEventListener('click', countTodoList));
}

init();