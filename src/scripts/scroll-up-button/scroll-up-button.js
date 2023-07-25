function useScrollUpButton() {
  const scrollUpButton = document.getElementById('scroll-up-button');
  const bodyOverflow = document.querySelector('.body-overflow');

  function scroll() {
    for (let i = 0; i < 20; i++) { // crutch
      bodyOverflow.scrollTop = 0;
    }
  }

  scrollUpButton.onclick = () => {
    scroll();
  };

  bodyOverflow.onscroll = () => {
    if (bodyOverflow.scrollTop <= 1121) {
      scrollUpButton.style.display = 'none';
    } else if (window.innerWidth <= '500') {
      scrollUpButton.style.display = 'none';
    } else {
      scrollUpButton.style.display = 'block';
    }
  };
}

export default useScrollUpButton;
