/* eslint-disable max-len */

function useSwipeSlider() {
  const slider = document.querySelector('.top-aboutus__videos');
  const slides = slider.querySelectorAll('.top-aboutus__video');

  const slider600 = document.querySelector('.top-aboutus--690__videos');
  const slides600 = slider600.querySelectorAll('.top-aboutus__video');

  const slidesDotsArray = document.querySelectorAll('.top-aboutus-dotted-slider__dot');
  const slidesDotsArray600 = document.querySelectorAll('.top-aboutus-dotted-slider__dot--690');

  let startX;

  let currentSlide = 0;
  let prevSlide;

  let currentSlide600 = 0;
  let prevSlide600;

  function visualDotsSwitch({
    dotsSlidesArray = [],
    slideCurrent = 0,
    slidePrev = 0,
  }) {
    dotsSlidesArray[slidePrev].classList.remove('top-aboutus-dotted-slider__dot--active');
    dotsSlidesArray[slideCurrent].classList.add('top-aboutus-dotted-slider__dot--active');
  }

  function visualSwitchSlides({
    sliderPictures = [],
    slideCurrent = 0,
  }) {
    for (let i = 0; i < sliderPictures.length; i++) {
      sliderPictures[i].style.marginLeft = `-${slideCurrent}00%`;
    }
  }

  function showNextSlide() {
    prevSlide = currentSlide;
    currentSlide = (currentSlide + 1) % slides.length;

    visualSwitchSlides({
      sliderPictures: slides,
      slideCurrent: currentSlide,
    });

    visualDotsSwitch({
      dotsSlidesArray: slidesDotsArray,
      slideCurrent: currentSlide,
      slidePrev: prevSlide,
    });
  }

  function showPrevSlide() {
    prevSlide = currentSlide;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;

    visualSwitchSlides({
      sliderPictures: slides,
      slideCurrent: currentSlide,
    });

    visualDotsSwitch({
      dotsSlidesArray: slidesDotsArray,
      slideCurrent: currentSlide,
      slidePrev: prevSlide,
    });
  }

  function showNextSlide600() {
    prevSlide600 = currentSlide600;
    currentSlide600 = (currentSlide600 + 1) % slides600.length;

    visualSwitchSlides({
      sliderPictures: slides600,
      slideCurrent: currentSlide600,
    });

    visualDotsSwitch({
      dotsSlidesArray: slidesDotsArray600,
      slideCurrent: currentSlide600,
      slidePrev: prevSlide600,
    });
  }

  function showPrevSlide600() {
    prevSlide600 = currentSlide600;
    currentSlide600 = (currentSlide600 - 1 + slides600.length) % slides600.length;

    visualSwitchSlides({
      sliderPictures: slides600,
      slideCurrent: currentSlide600,
    });

    visualDotsSwitch({
      dotsSlidesArray: slidesDotsArray600,
      slideCurrent: currentSlide600,
      slidePrev: prevSlide600,
    });
  }

  const diffXCalculateWhenDesktopSwipe = (event) => {
    if (window.innerWidth <= 768) {
      startX = event.clientX;
    }
  };

  const diffXCalculateWhenSwipe = (event) => {
    if (window.innerWidth <= 768) {
      startX = event.touches[0].clientX;
    }
  };

  const handleSwipe = ({
    mouseSwipeOrNot = true,
    switchNextFunction = () => {},
    switchPrevFunction = () => {},
    event = {},
    swipedPixels = 50,
  }) => {
    const endX = mouseSwipeOrNot ? event.clientX : event.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (window.innerWidth > 768 || Math.abs(diffX) < swipedPixels) {
      return;
    }

    if (diffX > 0) {
      // Swipe Left
      switchNextFunction();
    } else {
      // Swipe Right
      switchPrevFunction();
    }
  };

  slider.addEventListener('touchstart', (event) => {
    diffXCalculateWhenSwipe(event);
  });

  slider.addEventListener('touchend', (event) => {
    handleSwipe({
      mouseSwipeOrNot: false,
      switchNextFunction: showNextSlide,
      switchPrevFunction: showPrevSlide,
      event: event,
      swipedPixels: 50,
    });
  });

  slider.addEventListener('mousedown', (event) => {
    diffXCalculateWhenDesktopSwipe(event);
  });

  slider.addEventListener('mouseup', (event) => {
    handleSwipe({
      mouseSwipeOrNot: true,
      switchNextFunction: showNextSlide,
      switchPrevFunction: showPrevSlide,
      event: event,
      swipedPixels: 30,
    });
  });

  slider600.addEventListener('touchstart', (event) => {
    diffXCalculateWhenSwipe(event);
  });

  slider600.addEventListener('touchend', (event) => {
    handleSwipe({
      mouseSwipeOrNot: false,
      switchNextFunction: showNextSlide600,
      switchPrevFunction: showPrevSlide600,
      event: event,
      swipedPixels: 50,
    });
  });

  slider600.addEventListener('mousedown', (event) => {
    diffXCalculateWhenDesktopSwipe(event);
  });

  slider600.addEventListener('mouseup', (event) => {
    handleSwipe({
      mouseSwipeOrNot: true,
      switchNextFunction: showNextSlide600,
      switchPrevFunction: showPrevSlide600,
      event: event,
      swipedPixels: 30,
    });
  });

  function adaptToDesktop() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.margin = '0';
    }

    slides[0].classList.remove('pic-hidden');

    for (let i = 1; i < slides.length; i++) {
      slides[i].classList.add('pic-hidden');
    }
  }

  function adaptToTabletAndMobile() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('pic-hidden');
    }
  }

  const adaptAboutUsSlider = () => {
    if (window.innerWidth <= 768) {
      adaptToTabletAndMobile();
    } else if (window.innerWidth >= 769 && window.innerWidth <= 790) {
      adaptToDesktop();
    }
  };

  window.addEventListener('resize', adaptAboutUsSlider);
}

export default useSwipeSlider;
