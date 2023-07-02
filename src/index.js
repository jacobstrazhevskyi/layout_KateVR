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
const picturesAboutUs = document.querySelectorAll('.top-aboutus__video');

let picturesHeaderCount = 1;
const picturesHeader = document.querySelectorAll('.header__background-image');

const sliderButtons = [
  previousButton,
  nextButton,
  secondPreviousButton,
  secondNextButton,
];

for (const sliderButton of sliderButtons) {
  sliderButton.addEventListener('click', () => {
    if (sliderButton.classList[0].length > 16) {
      if (sliderButton
        .textContent
        .toLowerCase() === 'next' && picturesCountAboutUs < 3
      ) {
        picturesAboutUs[picturesCountAboutUs - 1].classList.remove('pic-shown');
        picturesAboutUs[picturesCountAboutUs - 1].classList.add('pic-hidden');
        picturesCountAboutUs += 1;
        sliderAboutusBlueLine.style.width = `${picturesCountAboutUs * 6.9}rem`;
        picturesAboutUs[picturesCountAboutUs - 1].classList.remove('pic-hidden');
        picturesAboutUs[picturesCountAboutUs - 1].classList.add('pic-shown');
        picturesAboutUs[picturesCountAboutUs - 1].style.display = 'block';
        picturesCountAboutUsDisplay.textContent = `${picturesCountAboutUs}/3`;
      } else if (
        sliderButton
          .textContent
          .toLowerCase() === 'previous' && picturesCountAboutUs > 1
      ) {
        picturesAboutUs[picturesCountAboutUs - 1].classList.remove('pic-shown');
        picturesAboutUs[picturesCountAboutUs - 1].classList.add('pic-hidden');
        picturesCountAboutUs -= 1;
        sliderAboutusBlueLine.style.width = `${picturesCountAboutUs * 6.9}rem`;
        picturesAboutUs[picturesCountAboutUs - 1].classList.remove('pic-hidden');
        picturesAboutUs[picturesCountAboutUs - 1].classList.add('pic-shown');
        picturesAboutUs[picturesCountAboutUs - 1].style.display = 'block';
        picturesCountAboutUsDisplay.textContent = `${picturesCountAboutUs}/3`;
      }
    } else {
      if (sliderButton
        .textContent
        .toLowerCase() === 'next' && picturesHeaderCount < 3
      ) {
        picturesHeader[picturesHeaderCount - 1].classList.remove('pic-shown');
        picturesHeader[picturesHeaderCount - 1].classList.add('pic-hidden');
        picturesHeaderCount += 1;
        sliderHeaderBlueLine.style.width = `${picturesHeaderCount * 6.9}rem`;
        picturesHeader[picturesHeaderCount - 1].classList.remove('pic-hidden');
        picturesHeader[picturesHeaderCount - 1].classList.add('pic-shown');
        picturesHeader[picturesHeaderCount - 1].style.display = 'block';
      } else if (sliderButton
        .textContent
        .toLowerCase() === 'previous' && picturesHeaderCount > 1
      ) {
        picturesHeader[picturesHeaderCount - 1].classList.remove('pic-shown');
        picturesHeader[picturesHeaderCount - 1].classList.add('pic-hidden');
        picturesHeaderCount -= 1;
        sliderHeaderBlueLine.style.width = `${picturesHeaderCount * 6.9}rem`;
        picturesHeader[picturesHeaderCount - 1].classList.remove('pic-hidden');
        picturesHeader[picturesHeaderCount - 1].classList.add('pic-shown');
        picturesHeader[picturesHeaderCount - 1].style.display = 'block';
      }
    }

    if (picturesHeaderCount === 3) {
      nextButton.style.color = '#484848';
      nextButton.style.cursor = 'default';
    } else {
      nextButton.style.color = '#fff';
      nextButton.style.cursor = 'pointer';
    }

    if (picturesHeaderCount === 1) {
      previousButton.style.color = '#484848';
      previousButton.style.cursor = 'default';
    } else {
      previousButton.style.color = '#fff';
      previousButton.style.cursor = 'pointer';
    }

    if (picturesCountAboutUs === 3) {
      secondNextButton.style.color = '#484848';
      secondNextButton.style.cursor = 'default';
    } else {
      secondNextButton.style.color = '#fff';
      secondNextButton.style.cursor = 'pointer';
    }

    if (picturesCountAboutUs === 1) {
      secondPreviousButton.style.color = '#484848';
      secondPreviousButton.style.cursor = 'default';
    } else {
      secondPreviousButton.style.color = '#fff';
      secondPreviousButton.style.cursor = 'pointer';
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
            document.querySelector(`.${featuresButtonsStatusArray[j].content}`).style.opacity = 1;
            featuresButtons[i].style.opacity = 0;
            featuresButtonsStatusArray[j].status = 'opened';
          } else if (featuresButtonsStatusArray[j].status === 'opened') {
            document.querySelector(`.${featuresButtonsStatusArray[j].content}`).style.opacity = 0;
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
