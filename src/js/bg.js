const backgroundURI = {
  1: 'https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  2: 'https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  3: 'https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
}

function paintingBackground() {
  const nthImage = Math.ceil(Math.random() * 3);
  wrap.style.background = `black url(${backgroundURI[nthImage]}) center center no-repeat`;
  wrap.style.backgroundSize ='cover';
  wrap.style.transition = 'ease-in 0.4s';
}

function init() {
  paintingBackground();
}

init();
