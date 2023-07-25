/* eslint-disable max-len */

const closeVideoPopup = ({
  popupElement = {},
  videoElement = {},
}) => {
  popupElement.style.opacity = 0;

  videoElement.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  document.querySelector('body').style.overflow = 'auto';

  setTimeout(function() {
    popupElement.style.visibility = 'hidden';
  }, 300);
};

const handleEscKeyDown = ({
  callback,
  popupElement,
}) => (event) => {
  if (event.keyCode !== 27 || popupElement.style.opacity !== '1') {
    return;
  }

  callback();
};

export { closeVideoPopup, handleEscKeyDown };
