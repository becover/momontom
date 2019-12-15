function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  hourMinutes.innerText = `
    ${hours < 10? `0${hours}` : hours} : ${minutes < 10? `0${minutes}` : minutes}
  `;
  clockSeconds.innerText = `
    ${seconds < 10? `0${seconds}` : seconds}
  `;
}

function init() {
  setInterval(getCurrentTime,1000);
}

init()