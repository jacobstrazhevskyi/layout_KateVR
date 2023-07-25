/* eslint-disable max-len */

function useHeaderMenu() {
  const menuBurger = document.getElementById('header-menu');
  const menuBurgerButton = document.getElementById('menu-burger');
  const menuBurgerItemsList = document.querySelectorAll('.header-menu-list__item');
  let menuBurgerActived = false;

  let alreadySelected = false;

  const languageMenuMobileItemsList = document.querySelectorAll('.list-header-language-menu__item');
  const languageMenuMobile = document.getElementById('header-language-menu-mobile');

  const desktopSelectedLanguage = document.querySelector('.switch-language__selected');

  let languageMenuMobileActived = false;

  function changeHeightOfHeaderTopElement() {
    const headerTop = document.querySelector('.header__top');

    if (window.innerWidth <= 430) {
      headerTop.style.height = '30px';
    } else {
      headerTop.style.height = '56px';
    }
  }

  function closeHeaderMenu() {
    menuBurgerButton.classList.remove('header__nav--active');
    menuBurger.classList.remove('header-menu--active');
    document.querySelector('body').style.overflow = 'auto';
    document.querySelector('.header__top').removeAttribute('style');
    menuBurgerActived = false;
  }

  const handleMenuButtonClick = () => {
    if (window.innerWidth > 768) {
      return;
    }

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

      changeHeightOfHeaderTopElement();

      menuBurgerActived = true;
    } else if (menuBurgerActived) {
      closeHeaderMenu();
    }
  };

  menuBurgerButton.addEventListener('click', handleMenuButtonClick);

  function openLanguageMenuMobile() {
    languageMenuMobile.classList.add('header-language-menu--active');
    menuBurgerButton.classList.remove('header__nav--active');
    menuBurgerButton.classList.add('header__nav--language-menu-active');
    menuBurger.classList.remove('header-menu--active');
    menuBurgerActived = false;
    languageMenuMobileActived = true;
  }

  for (let i = 0; i < menuBurgerItemsList.length; i++) {
    menuBurgerItemsList[i].addEventListener('click', () => {
      if (window.innerWidth > 768) {
        return;
      }

      if (menuBurgerItemsList[i].classList.contains('header-menu-list__item--button')) { // checking if its not link, a language-button
        openLanguageMenuMobile();
      } else if (menuBurgerItemsList[i].querySelector('.header-menu-list__link').classList.contains('header-menu-list__link')) {
        closeHeaderMenu();
      }
    });
  }

  function changeNameToDefault() {
    for (const languageMenuMobileItem of languageMenuMobileItemsList) {
      let defaultName = languageMenuMobileItem.textContent.split('');

      if (defaultName.includes('<')) {
        defaultName.length -= 2;
        defaultName = defaultName.join('');

        languageMenuMobileItem.textContent = defaultName;
      }
    }
  }

  function changeLanguageOnDesktop(mobileLanguageSwitchLanguageList, selectedLanguage) {
    for (const mobileLanguageSwitchLanguageListItem of mobileLanguageSwitchLanguageList) {
      if (mobileLanguageSwitchLanguageListItem.textContent === selectedLanguage) {
        mobileLanguageSwitchLanguageListItem.textContent = desktopSelectedLanguage.textContent;
      }
    }
  }

  const handleMobileLanguageMenuItemsClick = (languageMenuMobileItem) => {
    if (window.innerWidth > 768) {
      return;
    }

    languageMenuMobile.classList.remove('header-language-menu--active');
    menuBurgerButton.classList.add('header__nav--active');
    menuBurger.classList.add('header-menu--active');

    menuBurgerButton.classList.remove('header__nav--language-menu-active');

    const selectedLanguage = languageMenuMobileItem.textContent[0] + languageMenuMobileItem.textContent[1];
    const mobileLanguageSwitchLanguageList = document.querySelectorAll('.switch-language__avalibe-item');

    if (!alreadySelected && (desktopSelectedLanguage.textContent === 'En')) {
      alreadySelected = true;
    } else {
      changeNameToDefault();
    }

    changeLanguageOnDesktop(mobileLanguageSwitchLanguageList, selectedLanguage);

    desktopSelectedLanguage.textContent = selectedLanguage;

    languageMenuMobileItem.textContent += ' <';

    menuBurgerActived = true;
    languageMenuMobileActived = false;
  };

  for (let i = 0; i < languageMenuMobileItemsList.length; i++) {
    languageMenuMobileItemsList[i].addEventListener('click', () => {
      handleMobileLanguageMenuItemsClick(languageMenuMobileItemsList[i]);
    });
  }
}

export default useHeaderMenu;
