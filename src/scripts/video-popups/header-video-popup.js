/* eslint-disable max-len */

import { closeVideoPopup, handleEscKeyDown } from './close-video-popup-handlers';

function useHeaderVideoPopupHandlers() {
  const headerVideoPlayButton = document.getElementById('header-video-play-button');
  const headerVideoCloseButton = document.getElementById('header-video-popup-close-button');

  const headerVideoPopup = document.getElementById('header-video-popup');
  const headerVideo = document.getElementById('popup-video-iframe');

  headerVideoPlayButton.addEventListener('click', () => {
    headerVideoPopup.style.visibility = 'visible';
    headerVideoPopup.style.opacity = 1;
    document.querySelector('body').style.overflow = 'hidden';
  });

  const handleHeaderPopupClose = () => {
    closeVideoPopup({
      popupElement: headerVideoPopup,
      videoElement: headerVideo,
    });
  };

  headerVideoCloseButton.addEventListener('click', handleHeaderPopupClose);

  document.addEventListener('keydown', handleEscKeyDown({
    callback: handleHeaderPopupClose,
    popupElement: headerVideoPopup,
  }));

  headerVideo.onkeydown = function() {
    handleEscKeyDown({
      callback: handleHeaderPopupClose,
      popupElement: headerVideoPopup,
    });
  };

  headerVideoPopup.addEventListener('click', handleHeaderPopupClose);
}

export default useHeaderVideoPopupHandlers;
