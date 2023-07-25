import useDesktopSliders from './desktop-sliders/sliders-desktop';
import useSwipeSlider from './swipe-slider/swipe-slider';

function useSliders() {
  useDesktopSliders();
  useSwipeSlider();
}

export default useSliders;
