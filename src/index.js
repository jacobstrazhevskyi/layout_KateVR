'use strict';
/* eslint-disable no-console */
/* eslint-disable max-len */
/*                    SCROLL TO TOP BUTTON                              */

const scrollUpButton = document.getElementById('scroll-up-button');

scrollUpButton.onclick = () => {
  scroll();
};

function scroll() {
  for (let i = 0; i < 20; i++) {
    document.documentElement.scrollTop = 0;
  }
}

document.onscroll = () => {
  if (window.pageYOffset < 1121) {
    scrollUpButton.style.display = 'none';
  } else if (window.innerWidth <= '500') {
    scrollUpButton.style.display = 'none';
  } else {
    scrollUpButton.style.display = 'block';
  }
};

/*                            SLIDER                                     */
const previousButton = document.querySelector('.slider__previous');
const nextButton = document.querySelector('.slider__next');
const secondPreviousButton = document.querySelector(
  '.top-aboutus-slider__previous'
);
const secondNextButton = document.querySelector('.top-aboutus-slider__next');

const sliderHeaderBlueLine = document.querySelector('.slider__border-blue');
const sliderAboutusBlueLine = document.querySelector(
  '.top-aboutus-slider__border-blue'
);

const picturesCountAboutUsDisplay = document.querySelector(
  '.top-aboutus__series-count'
);

let picturesCountAboutUs = 1;
const picturesAboutUs = document.querySelectorAll('.top-aboutus__video--not-swipe-slider');

let picturesHeaderCount = 1;
const picturesHeader = document.querySelectorAll('.header__background-image');

const sliderButtons = [
  previousButton,
  nextButton,
  secondPreviousButton,
  secondNextButton,
];

picturesHeader[0].style.display = 'block';
picturesAboutUs[0].style.display = 'block';

for (const sliderButton of sliderButtons) {
  sliderButton.addEventListener('click', () => {
    if (sliderButton.classList[0].length > 16) {
      if (sliderButton
        .textContent
        .toLowerCase() === 'next'
      ) {
        picturesAboutUs[picturesCountAboutUs - 1].classList.remove('pic-shown');
        picturesAboutUs[picturesCountAboutUs - 1].classList.add('pic-hidden');
        picturesCountAboutUs += 1;

        if (picturesCountAboutUs > picturesAboutUs.length) {
          picturesCountAboutUs = 1;
        }
        sliderAboutusBlueLine.style.width = `${picturesCountAboutUs * 6.9}rem`;
        picturesAboutUs[picturesCountAboutUs - 1].classList.remove('pic-hidden');
        picturesAboutUs[picturesCountAboutUs - 1].classList.add('pic-shown');
        picturesAboutUs[picturesCountAboutUs - 1].style.display = 'block';
        picturesCountAboutUsDisplay.textContent = `${picturesCountAboutUs}/3`;
      } else if (
        sliderButton
          .textContent
          .toLowerCase() === 'previous'
      ) {
        picturesAboutUs[picturesCountAboutUs - 1].classList.remove('pic-shown');
        picturesAboutUs[picturesCountAboutUs - 1].classList.add('pic-hidden');
        picturesCountAboutUs -= 1;

        if (picturesCountAboutUs < 1) {
          picturesCountAboutUs = picturesAboutUs.length;
        }
        sliderAboutusBlueLine.style.width = `${picturesCountAboutUs * 6.9}rem`;
        picturesAboutUs[picturesCountAboutUs - 1].classList.remove('pic-hidden');
        picturesAboutUs[picturesCountAboutUs - 1].classList.add('pic-shown');
        picturesAboutUs[picturesCountAboutUs - 1].style.display = 'block';
        picturesCountAboutUsDisplay.textContent = `${picturesCountAboutUs}/3`;
      }
    } else {
      if (sliderButton
        .textContent
        .toLowerCase() === 'next'
      ) {
        picturesHeader[picturesHeaderCount - 1].classList.remove('pic-shown');
        picturesHeader[picturesHeaderCount - 1].classList.add('pic-hidden');
        picturesHeaderCount += 1;

        if (picturesHeaderCount > picturesHeader.length) {
          picturesHeaderCount = 1;
        }
        sliderHeaderBlueLine.style.width = `${picturesHeaderCount * 6.9}rem`;
        picturesHeader[picturesHeaderCount - 1].classList.remove('pic-hidden');
        picturesHeader[picturesHeaderCount - 1].classList.add('pic-shown');
        picturesHeader[picturesHeaderCount - 1].style.display = 'block';
      } else if (sliderButton
        .textContent
        .toLowerCase() === 'previous'
      ) {
        picturesHeader[picturesHeaderCount - 1].classList.remove('pic-shown');
        picturesHeader[picturesHeaderCount - 1].classList.add('pic-hidden');
        picturesHeaderCount -= 1;

        if (picturesHeaderCount < 1) {
          picturesHeaderCount = picturesHeader.length;
        }
        sliderHeaderBlueLine.style.width = `${picturesHeaderCount * 6.9}rem`;
        picturesHeader[picturesHeaderCount - 1].classList.remove('pic-hidden');
        picturesHeader[picturesHeaderCount - 1].classList.add('pic-shown');
        picturesHeader[picturesHeaderCount - 1].style.display = 'block';
      }
    }
  });
}

/*                      TECH FEATURES                            */

const featuresButtons = document.querySelectorAll('.features__decoration');
const contentElements = document.querySelectorAll('.list-features');

if (window.innerWidth <= 1100) {
  const featuresButtonsStatusArray = [];

  class FeatureShowButtonStatus {
    constructor(id, openCloseStatus, content, image) {
      this.id = id;
      this.status = openCloseStatus;
      this.content = content;
    }
  }

  for (let i = 0; i < featuresButtons.length; i++) {
    featuresButtonsStatusArray.push(
      new FeatureShowButtonStatus(
        featuresButtons[i].classList[1],
        'closed',
        contentElements[i].classList[2]
      )
    );

    featuresButtons[i].addEventListener('click', () => {
      for (let j = 0; j < featuresButtonsStatusArray.length; j++) {
        if (featuresButtonsStatusArray[j].id === featuresButtons[i].classList[1]) {
          if (featuresButtonsStatusArray[j].status === 'closed') {
            document.querySelector(`.${featuresButtonsStatusArray[j].content}`).style.display = 'block';
            document.querySelector(`.${featuresButtonsStatusArray[j].content}`).style.opacity = 1;
            featuresButtons[i].style.opacity = 0;
            featuresButtonsStatusArray[j].status = 'opened';
          } else if (featuresButtonsStatusArray[j].status === 'opened') {
            document.querySelector(`.${featuresButtonsStatusArray[j].content}`).style.opacity = 0;

            setTimeout(() => {
              document.querySelector(`.${featuresButtonsStatusArray[j].content}`).style.display = 'none';
            }, 200);
            featuresButtons[i].style.opacity = 1;
            featuresButtonsStatusArray[j].status = 'closed';
          }
        }
      }
    });
  }
}

/*                       LANGUAGE SWITCH BUTTON                               */

const languageSwitchButton = document.getElementById('language-switch-button');
const languagesArray = document.querySelectorAll('.switch-language__avalibe-item');

languageSwitchButton.addEventListener('click', (event) => {
  if (!document.querySelector('.header__lang-switch').classList.toString().split(' ').includes('header__lang-switch--active')) {
    document.querySelector('.header__lang-switch').classList.add('header__lang-switch--active');
    document.querySelector('.switch-language__avalibe-list').classList.add('switch-language__avalibe-list--active');
  } else if (document.querySelector('.header__lang-switch').classList.toString().split(' ').includes('header__lang-switch--active')) {
    document.querySelector('.header__lang-switch').classList.remove('header__lang-switch--active');
    document.querySelector('.switch-language__avalibe-list').classList.remove('switch-language__avalibe-list--active');
  }
});

for (let i = 0; i < languagesArray.length; i++) {
  languagesArray[i].addEventListener('click', () => {
    const languagePrev = document.querySelector('.switch-language__selected').textContent;
    const languageSelectedNow = languagesArray[i].textContent;

    languagesArray[i].textContent = languagePrev;
    document.querySelector('.switch-language__selected').textContent = languageSelectedNow;

    document.querySelector('.header__lang-switch').classList.remove('header__lang-switch--active');
    document.querySelector('.switch-language__avalibe-list').classList.remove('switch-language__avalibe-list--active');
  });
}

/*                                HEADER VIDEO POPUP                                                */

const headerVideoPlayButton = document.getElementById('header-video-play-button');
const headerVideoCloseButton = document.getElementById('header-video-popup-close-button');

const headerVideoPopup = document.getElementById('header-video-popup');

headerVideoPlayButton.addEventListener('click', () => {
  headerVideoPopup.style.visibility = 'visible';
  headerVideoPopup.style.opacity = 1;
  document.querySelector('body').style.overflow = 'hidden';
});

headerVideoCloseButton.addEventListener('click', () => {
  headerVideoPopup.style.opacity = 0;

  document.getElementById('popup-video-iframe').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  document.querySelector('body').style.overflow = 'auto';

  setTimeout(function() {
    headerVideoPopup.style.visibility = 'hidden';
  }, 300);
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    if (headerVideoPopup.style.opacity === '1') {
      headerVideoPopup.style.opacity = 0;

      document.getElementById('popup-video-iframe').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      document.querySelector('body').style.overflow = 'auto';

      setTimeout(function() {
        headerVideoPopup.style.visibility = 'hidden';
      }, 300);
    }
  }
});

/*                                     MENU BURGER                                                */

const menuBurger = document.getElementById('header-menu');
const menuBurgerButton = document.getElementById('menu-burger');
const menuBurgerItemsList = document.querySelectorAll('.header-menu-list__item');
let menuBurgerActived = false;

const languageMenuMobileItemsList = document.querySelectorAll('.list-header-language-menu__item');
const languageMenuMobile = document.getElementById('header-language-menu-mobile');

let languageMenuMobileActived = false;

console.log(menuBurgerItemsList);

if (window.innerWidth <= 768) {
  menuBurgerButton.addEventListener('click', () => {
    if (languageMenuMobileActived) {
      languageMenuMobile.classList.remove('header-language-menu--active');
      menuBurgerButton.classList.add('header__nav--active');
      menuBurger.classList.add('header-menu--active');

      menuBurgerButton.classList.remove('header__nav--language-menu-active');

      menuBurgerActived = true;
      languageMenuMobileActived = false;

      return;
    }

    if (!menuBurgerActived) {
      menuBurgerButton.classList.add('header__nav--active');
      menuBurger.classList.add('header-menu--active');
      document.querySelector('body').style.overflow = 'hidden';

      if (window.innerWidth <= 430) {
        document.querySelector('.header__top').style.height = '30px';
      } else {
        document.querySelector('.header__top').style.height = '56px';
      }
      menuBurgerActived = true;
    } else if (menuBurgerActived) {
      menuBurgerButton.classList.remove('header__nav--active');
      menuBurger.classList.remove('header-menu--active');
      document.querySelector('body').style.overflow = 'auto';
      document.querySelector('.header__top').removeAttribute('style');
      menuBurgerActived = false;
    }
  });

  for (let i = 0; i < menuBurgerItemsList.length; i++) {
    menuBurgerItemsList[i].addEventListener('click', () => {
      if (menuBurgerItemsList[i].classList.contains('header-menu-list__item--button')) {
        languageMenuMobile.classList.add('header-language-menu--active');
        menuBurgerButton.classList.remove('header__nav--active');
        menuBurgerButton.classList.add('header__nav--language-menu-active');
        menuBurger.classList.remove('header-menu--active');
        menuBurgerActived = false;
        languageMenuMobileActived = true;
      } else if (menuBurgerItemsList[i].querySelector('.header-menu-list__link').classList.contains('header-menu-list__link')) {
        menuBurgerButton.classList.remove('header__nav--active');
        menuBurger.classList.remove('header-menu--active');
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.header__top').removeAttribute('style');
        menuBurgerActived = false;
      }
    });
  }

  for (let i = 0; i < languageMenuMobileItemsList.length; i++) {
    languageMenuMobileItemsList[i].addEventListener('click', () => {
      languageMenuMobile.classList.remove('header-language-menu--active');
      menuBurgerButton.classList.add('header__nav--active');
      menuBurger.classList.add('header-menu--active');

      menuBurgerButton.classList.remove('header__nav--language-menu-active');

      menuBurgerActived = true;
      languageMenuMobileActived = false;
    });
  }
}

/*                             SWIPE SLIDER                                           */

const slider = (window.innerWidth > 600) ? document.querySelector('.top-aboutus__videos') : document.querySelector('.top-aboutus--690__videos');
const slides = slider.querySelectorAll('.top-aboutus__video');

const slidesDotsArray = (window.innerWidth > 690) ? document.querySelectorAll('.top-aboutus-dotted-slider__dot') : document.querySelectorAll('.top-aboutus-dotted-slider__dot--690');

let startX;

let currentSlide = 0;
let prevSlide;

function showNextSlide() {
  // slides[currentSlide].style.display = 'none';
  prevSlide = currentSlide;
  currentSlide = (currentSlide + 1) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.marginLeft = `-${currentSlide}00%`;
  }

  // slides[currentSlide].style.display = 'block';

  slidesDotsArray[prevSlide].classList.remove('top-aboutus-dotted-slider__dot--active');
  slidesDotsArray[currentSlide].classList.add('top-aboutus-dotted-slider__dot--active');
}

function showPrevSlide() {
  // slides[currentSlide].style.display = 'none';
  prevSlide = currentSlide;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.marginLeft = `-${currentSlide}00%`;
  }
  // slides[currentSlide].style.display = 'block';

  slidesDotsArray[prevSlide].classList.remove('top-aboutus-dotted-slider__dot--active');
  slidesDotsArray[currentSlide].classList.add('top-aboutus-dotted-slider__dot--active');
}

if (window.innerWidth <= 768) {
  slider.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
  });

  slider.addEventListener('touchend', (event) => {
    const endX = event.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe Left
        showNextSlide();
      } else {
        // Swipe Right
        showPrevSlide();
      }
    }
  });
}

/*                             ABOUTUS VIDEO POPUP                                           */

const aboutusVideoPlayButton = document.getElementById('aboutus-video-play-button');
const aboutusVideoCloseButton = document.getElementById('aboutus-video-popup-close-button');

const aboutusVideoPopup = document.getElementById('aboutus-video-popup');

aboutusVideoPlayButton.addEventListener('click', () => {
  aboutusVideoPopup.style.visibility = 'visible';
  aboutusVideoPopup.style.opacity = 1;
  document.querySelector('body').style.overflow = 'hidden';
});

aboutusVideoCloseButton.addEventListener('click', () => {
  aboutusVideoPopup.style.opacity = 0;

  document.getElementById('popup-aboutus-video-iframe').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  document.querySelector('body').style.overflow = 'auto';

  setTimeout(function() {
    aboutusVideoPopup.style.visibility = 'hidden';
  }, 300);
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    if (aboutusVideoPopup.style.opacity === '1') {
      aboutusVideoPopup.style.opacity = 0;

      document.getElementById('popup-aboutus-video-iframe').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      document.querySelector('body').style.overflow = 'auto';

      setTimeout(function() {
        aboutusVideoPopup.style.visibility = 'hidden';
      }, 300);
    }
  }
});
