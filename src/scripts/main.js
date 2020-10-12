'use strict';

// Navigation button effects
function menuButtonEffects() {
  const navBtn = document.querySelector('.nav-btn');
  const navBtnBars = document.querySelectorAll('.nav-btn__bar');
  let isClicked = false;

  navBtn.addEventListener('mouseover', () => {
    if (!isClicked) {
      [...navBtnBars].map(
        bar => bar.classList.toggle('nav-btn__bar--hovered')
      );
    }
  });

  navBtn.addEventListener('mouseout', () => {
    if (!isClicked) {
      [...navBtnBars].map(
        bar => bar.classList.toggle('nav-btn__bar--hovered')
      );
    }
  });

  navBtn.addEventListener('click', () => {
    isClicked = !isClicked;

    switch (isClicked) {
      case true:
        [...navBtnBars].map(
          bar => bar.classList.toggle('nav-btn__bar--clicked')
        );
        navBtn.classList.toggle('nav-btn--clicked');
        break;

      default:
        [...navBtnBars].map(
          bar => bar.classList.toggle('nav-btn__bar--clicked')
        );
        navBtn.classList.toggle('nav-btn--clicked');
    }
  });
}
menuButtonEffects();

// Square effects
function squareEffects() {
  const squareInner = document.querySelector('.square__inner');

  squareInner.addEventListener('click', () => {
    squareInner.classList.toggle('square__inner--is-flipped');
  });
}
squareEffects();
