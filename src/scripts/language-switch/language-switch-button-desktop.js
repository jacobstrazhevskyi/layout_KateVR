/* eslint-disable max-len */

function useLanguageSwitchButtonDesktop() {
  const languageSwitchButton = document.getElementById('language-switch-button');
  const languagesArray = document.querySelectorAll('.switch-language__avalibe-item');

  let alreadySelected = false;

  function checkForAlreadySelectedLanguage(mobileLanguageMenuItems) {
    if (!alreadySelected) {
      alreadySelected = true;

      return;
    }

    for (const mobileLanguageMenuItem of mobileLanguageMenuItems) {
      let defaultName = mobileLanguageMenuItem.textContent.split('');

      if (defaultName.includes('<')) {
        defaultName.length -= 2;
        defaultName = defaultName.join('');

        mobileLanguageMenuItem.textContent = defaultName;
      }
    }
  }

  const handleLanguageSwitch = (clickedButton) => {
    const languagePrev = document.querySelector('.switch-language__selected').textContent;
    const languageSelectedNow = clickedButton.textContent;

    clickedButton.textContent = languagePrev;
    document.querySelector('.switch-language__selected').textContent = languageSelectedNow;

    const mobileLanguageMenuItems = document.querySelectorAll('.list-header-language-menu__item');

    checkForAlreadySelectedLanguage(mobileLanguageMenuItems);

    for (const mobileLanguageMenuItem of mobileLanguageMenuItems) {
      if (mobileLanguageMenuItem.textContent.slice(0, 2) === languageSelectedNow) {
        mobileLanguageMenuItem.textContent += ' <';
      }
    }

    document.querySelector('.header__lang-switch').classList.remove('header__lang-switch--active');
    document.querySelector('.switch-language__avalibe-list').classList.remove('switch-language__avalibe-list--active');
  };

  const handleSwithLanguageButtonClick = () => {
    const swithLanguageButton = document.querySelector('.header__lang-switch');
    const languagesList = document.querySelector('.switch-language__avalibe-list');

    if (!swithLanguageButton.classList.toString().split(' ').includes('header__lang-switch--active')) {
      swithLanguageButton.classList.add('header__lang-switch--active');
      languagesList.classList.add('switch-language__avalibe-list--active');
    } else if (swithLanguageButton.classList.toString().split(' ').includes('header__lang-switch--active')) {
      swithLanguageButton.classList.remove('header__lang-switch--active');
      languagesList.classList.remove('switch-language__avalibe-list--active');
    }
  };

  languageSwitchButton.addEventListener('click', handleSwithLanguageButtonClick);

  for (let i = 0; i < languagesArray.length; i++) {
    languagesArray[i].addEventListener('click', () => {
      handleLanguageSwitch(languagesArray[i]);
    });
  }
}

export default useLanguageSwitchButtonDesktop;
