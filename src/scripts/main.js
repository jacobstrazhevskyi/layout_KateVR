/* eslint-disable max-len */

import useScrollUpButton from './scroll-up-button/scroll-up-button';

import useAboutUsVideoPopupHandlers from './video-popups/about-us-video-popup';
import useHeaderVideoPopupHandlers from './video-popups/header-video-popup';

import useLanguageSwitchButtonDesktop from './language-switch/language-switch-button-desktop';

import useFeaturesButtons from './features-section/features-buttons';

import useHeaderMenu from './header-menu/header-menu';

import useSliders from './sliders/sliders';

function Page() {
  /*                    SCROLL TO TOP BUTTON                              */

  useScrollUpButton();

  /*                            SLIDERS                                     */

  useSliders();

  /*                      TECH FEATURES                            */

  useFeaturesButtons();

  /*                       LANGUAGE SWITCH BUTTON                               */

  useLanguageSwitchButtonDesktop();

  /*                                     MENU BURGER                                                */

  useHeaderMenu();

  /*                             VIDEO POPUPS                                           */

  useAboutUsVideoPopupHandlers();
  useHeaderVideoPopupHandlers();
}

export default Page;
