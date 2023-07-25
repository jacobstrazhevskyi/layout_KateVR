/* eslint-disable max-len */

function useDesktopSliders() {
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

  function reloadSlideStatus({
    slide = {},
    slidesCount = 1,
    sliderVisualLine = {},
  }) {
    sliderVisualLine.style.width = `${slidesCount * 6.9}rem`;
    slide[slidesCount - 1].classList.remove('pic-hidden');
    slide[slidesCount - 1].classList.add('pic-shown');
    slide[slidesCount - 1].style.display = 'block';
  }

  function checkNeedHeaderSlideCountToDefault() {
    if (picturesHeaderCount > picturesHeader.length) {
      picturesHeaderCount = 1;
    }

    if (picturesHeaderCount < 1) {
      picturesHeaderCount = picturesHeader.length;
    }
  }

  function checkNeedAboutUsSlideCountToDefault() {
    if (picturesCountAboutUs > picturesAboutUs.length) {
      picturesCountAboutUs = 1;
    }

    if (picturesCountAboutUs < 1) {
      picturesCountAboutUs = picturesAboutUs.length;
    }
  }

  function checkWhichHeaderSliderButtonClicked(sliderButton) {
    if (sliderButton
      .textContent
      .toLowerCase() === 'next'
    ) {
      visualSwitchSlide({
        slide: picturesHeader,
        slidesCount: picturesHeaderCount,
      });

      picturesHeaderCount += 1;

      checkNeedHeaderSlideCountToDefault();

      reloadSlideStatus({
        slide: picturesHeader,
        slidesCount: picturesHeaderCount,
        sliderVisualLine: sliderHeaderBlueLine,
      });
    } else if (sliderButton
      .textContent
      .toLowerCase() === 'previous'
    ) {
      visualSwitchSlide({
        slide: picturesHeader,
        slidesCount: picturesHeaderCount,
      });

      picturesHeaderCount -= 1;

      checkNeedHeaderSlideCountToDefault();

      reloadSlideStatus({
        slide: picturesHeader,
        slidesCount: picturesHeaderCount,
        sliderVisualLine: sliderHeaderBlueLine,
      });
    }
  }

  function visualSwitchSlide({
    slide = {},
    slidesCount = 1,
  }) {
    slide[slidesCount - 1].classList.remove('pic-shown');
    slide[slidesCount - 1].classList.add('pic-hidden');
  }

  function checkWhichAboutUsSliderButtonClicked(sliderButton) {
    if (sliderButton
      .textContent
      .toLowerCase() === 'next'
    ) {
      visualSwitchSlide({
        slide: picturesAboutUs,
        slidesCount: picturesCountAboutUs,
      });

      picturesCountAboutUs += 1;

      checkNeedAboutUsSlideCountToDefault();

      reloadSlideStatus({
        slide: picturesAboutUs,
        slidesCount: picturesCountAboutUs,
        sliderVisualLine: sliderAboutusBlueLine,
      });

      picturesCountAboutUsDisplay.textContent = `${picturesCountAboutUs}/3`;
    } else if (
      sliderButton
        .textContent
        .toLowerCase() === 'previous'
    ) {
      visualSwitchSlide({
        slide: picturesAboutUs,
        slidesCount: picturesCountAboutUs,
      });

      picturesCountAboutUs -= 1;

      checkNeedAboutUsSlideCountToDefault();

      reloadSlideStatus({
        slide: picturesAboutUs,
        slidesCount: picturesCountAboutUs,
        sliderVisualLine: sliderAboutusBlueLine,
      });

      picturesCountAboutUsDisplay.textContent = `${picturesCountAboutUs}/3`;
    }
  }

  const handleSlideSwitch = (sliderButton) => {
    if (sliderButton.classList[0].length > 16) {
      checkWhichAboutUsSliderButtonClicked(sliderButton);
    } else {
      checkWhichHeaderSliderButtonClicked(sliderButton);
    }
  };

  for (const sliderButton of sliderButtons) {
    sliderButton.addEventListener('click', () => {
      handleSlideSwitch(sliderButton);
    });
  }
}

export default useDesktopSliders;
