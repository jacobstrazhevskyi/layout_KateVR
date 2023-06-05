'use strict';
/* eslint-disable no-console */
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
        // eslint-disable-next-line max-len
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
        // eslint-disable-next-line max-len
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
