const buttons = todoList.querySelectorAll('li button');
const inputCheckbox = todoList.querySelectorAll('li .btn__done');

function countTodoList() {
  const length = todos.length;
  const done = todos.filter(todo => todo.checked === true).length;
  console.log(done)
  infoTotal.innerText = length;
  infoDone.innerText = done;
  infoPandding.innerText = length - done;
  infoAchivement.innerText = `${(done / length * 100).toFixed(1)}%`;
}

function init() {
  window.addEventListener('load', countTodoList);
  todoForm.addEventListener('submit', countTodoList);
  Array.from(buttons).forEach(button => button.addEventListener('click', countTodoList));
  todo
  Array.from(inputCheckbox).forEach(input => input.addEventListener('click', countTodoList));
  todo
}

init();