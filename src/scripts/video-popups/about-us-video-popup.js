/* eslint-disable max-len */

import { closeVideoPopup, handleEscKeyDown } from './close-video-popup-handlers';

function useAboutUsVideoPopupHandlers() {
  const aboutusVideoPlayButton = (window.innerWidth > 600) ? document.getElementById('aboutus-video-play-button') : document.getElementById('aboutus-video-play-button-690');
  const aboutusVideoCloseButton = document.getElementById('aboutus-video-popup-close-button');

  const aboutusVideoPopup = document.getElementById('aboutus-video-popup');
  const aboutUsVideo = document.getElementById('popup-aboutus-video-iframe');

  aboutusVideoPlayButton.addEventListener('click', () => {
    aboutusVideoPopup.style.visibility = 'visible';
    aboutusVideoPopup.style.opacity = 1;
    document.querySelector('body').style.overflow = 'hidden';
  });

  const handleAboutUsPopupClose = () => {
    closeVideoPopup({
      popupElement: aboutusVideoPopup,
      videoElement: aboutUsVideo,
    });
  };

  aboutusVideoCloseButton.addEventListener('click', handleAboutUsPopupClose);

  document.addEventListener('keydown', handleEscKeyDown({
    callback: handleAboutUsPopupClose,
    popupElement: aboutusVideoPopup,
  }));

  aboutUsVideo.onkeydown = function() {
    handleEscKeyDown({
      callback: handleAboutUsPopupClose,
      popupElement: aboutusVideoPopup,
    });
  };

  aboutusVideoPopup.addEventListener('click', handleAboutUsPopupClose);

  document.getElementById('aboutus-video-play-button-690').addEventListener('click', () => {
    aboutusVideoPopup.style.visibility = 'visible';
    aboutusVideoPopup.style.opacity = 1;
    document.querySelector('body').style.overflow = 'hidden';
  });
}

export default useAboutUsVideoPopupHandlers;
