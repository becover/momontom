const greetingObj = {
  user: "username",
  emoji: ["🤭", "🥰", "😊", "😆", "😄", "😎", "😍"]
};
const ACTIVE = "active";

function hourlyGreetings() {
  const now = new Date();
  const hours = now.getHours();
  if (hours < 12 && hours > 5) {
    greetingText.innerText = `Good morning`;
    return false;
  }
  if (hours < 17 && hours >= 12) {
    greetingText.innerText = `Good afternoon`;
    return false;
  }
  if (hours < 23 && hours >= 17) {
    greetingText.innerText = `Good evening`;
    return false;
  }
  if (hours < 24 && hours >= 23 || hours < 6 && hours >= 0) {
    greetingText.innerText = `Good night`;
    return false;
  }
}

function loadEmoji() {
  const leng = greetingObj["emoji"].length;
  const index = Math.floor(Math.random() * leng);
  greetingEmoji.innerText = greetingObj["emoji"][index];
}

function saveUsename(username) {
  localStorage.setItem(greetingObj.user, username);
}

function handleSubmit(e) {
  e.preventDefault();
  popup.classList.remove(ACTIVE);
  const username = popupInput.value;
  if (!currentValue) {
    alert('Please write a text')
    todoInput.focus();
    return false;
  }
  paintGreetingUser(username);
  saveUsename(username);
}

function getUsername() {
  popup.classList.add(ACTIVE);
  popupInput.focus();
  popupForm.addEventListener("submit", handleSubmit);
}

function paintGreetingUser(nickname) {
  greetingUser.innerText = nickname;
}

function loadUsername() {
  const loaded = localStorage.getItem(greetingObj.user);
  if (loaded !== null) {
    paintGreetingUser(loaded);
    return false;
  } else {
    getUsername();
  }
}

function init() {
  loadUsername();
  loadEmoji();
  hourlyGreetings();
}

init();
