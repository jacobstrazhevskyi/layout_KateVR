/* eslint-disable max-len */

function useFeaturesButtons() {
  const featuresButtons = document.querySelectorAll('.features__decoration');
  const contentElements = document.querySelectorAll('.list-features');

  const featuresButtonsStatusArray = [];

  let openedFeatureButtonNow;
  let openedFeatureNow;
  let openedFeatureId;

  class FeatureShowButtonStatus {
    constructor(id, openCloseStatus, content) {
      this.id = id;
      this.status = openCloseStatus;
      this.content = content;
    }
  }

  function checkForLastOpenedFeature(index) {
    if (openedFeatureButtonNow !== featuresButtons[index]) {
      if (openedFeatureButtonNow !== undefined) {
        openedFeatureButtonNow.style.opacity = 1;
        openedFeatureNow.style.opacity = 0;
        openedFeatureNow.style.display = 'none';
        featuresButtonsStatusArray[openedFeatureId].status = 'closed';
      }
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
      if (window.innerWidth > 1100) {
        return;
      }

      for (let j = 0; j < featuresButtonsStatusArray.length; j++) {
        if (featuresButtonsStatusArray[j].id !== featuresButtons[i].classList[1]) {
          continue;
        }

        if (featuresButtonsStatusArray[j].status === 'closed') {
          document.querySelector(`.${featuresButtonsStatusArray[j].content}`).style.display = 'block';

          setTimeout(() => {
            document.querySelector(`.${featuresButtonsStatusArray[j].content}`).style.opacity = 1;
          }, 1);
          featuresButtons[i].style.opacity = 0;
          featuresButtonsStatusArray[j].status = 'opened';

          checkForLastOpenedFeature(i);

          openedFeatureButtonNow = featuresButtons[i];
          openedFeatureNow = document.querySelector(`.${featuresButtonsStatusArray[j].content}`);
          openedFeatureId = j;
        } else if (featuresButtonsStatusArray[j].status === 'opened') {
          document.querySelector(`.${featuresButtonsStatusArray[j].content}`).style.opacity = 0;

          setTimeout(() => {
            document.querySelector(`.${featuresButtonsStatusArray[j].content}`).style.display = 'none';
          }, 200);
          featuresButtons[i].style.opacity = 1;
          featuresButtonsStatusArray[j].status = 'closed';
        }
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1100) {
      for (let i = 0; i < contentElements.length; i++) {
        contentElements[i].style.opacity = 1;
        contentElements[i].style.display = 'block';
      }
    }

    if (window.innerWidth < 1100 && window.innerWidth >= 1000) {
      for (let i = 0; i < contentElements.length; i++) {
        contentElements[i].style.opacity = 0;
        contentElements[i].style.display = 'none';
      }

      for (let i = 0; i < featuresButtons.length; i++) {
        featuresButtons[i].style.opacity = 1;
      }

      for (let i = 0; i < featuresButtonsStatusArray.length; i++) {
        featuresButtonsStatusArray[i].status = 'closed';
      }
    }
  });
}

export default useFeaturesButtons;
