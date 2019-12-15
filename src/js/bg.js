const backgroundURI = {
  1: 'https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  2: 'https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  3: 'https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  4: 'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  5: 'https://images.unsplash.com/photo-1485163819542-13adeb5e0068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  6: 'https://images.unsplash.com/photo-1503875154399-95d2b151e3b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  7: 'https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  8: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  9: 'https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  10: 'https://images.unsplash.com/photo-1475872711536-95ec04b9d290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  11: 'https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
  12: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
}

function paintingBackground() {
  const nthImage = Math.ceil(Math.random() * 12);
  wrap.style.background = `black url(${backgroundURI[nthImage]}) center center no-repeat`;
  wrap.style.backgroundSize ='cover';
  wrap.style.transition = 'ease-in 0.4s';
}

function init() {
  paintingBackground();
}

init();
