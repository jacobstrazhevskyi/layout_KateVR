// 1121
'use strict';

const scrollUpButton = document.getElementById('scroll-up-button');

scrollUpButton.onclick = () => {
  scroll();
};

function scroll() {
  for (let i = 0; i < 20; i++) {
    document.documentElement.scrollTop = 0;
  }
}
