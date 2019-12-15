const buttons = todoList.querySelectorAll('li button');
const inputCheckbox = todoList.querySelectorAll('li .btn__done');

function countTodoList() {
  const length = todos.length;
  const done = todos.filter(todo => todo.checked === true).length;
  let percent = Math.floor(done / length * 100);
  if (isNaN(percent)) percent = 0
  infoTotal.innerText = length;
  infoDone.innerText = done;
  infoPandding.innerText = length - done;
  infoAchivement.innerText = `${percent}`;
}

function init() {
  window.addEventListener('load', countTodoList);
  todoForm.addEventListener('submit', countTodoList);
  Array.from(buttons).forEach(button => button.addEventListener('click', countTodoList));
  Array.from(inputCheckbox).forEach(input => input.addEventListener('click', countTodoList));
}

init();