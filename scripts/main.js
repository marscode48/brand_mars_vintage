document.addEventListener('DOMContentLoaded', function () {
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this._init();
    this._scrollInit();
  }

  _init() {
    new MenuOpen();
    // new SmoothScroll(80);
    new HeroSlider('.swiper');
  }

  _inviewAnimation(el, inview) {
    console.log(el)
    console.log(inview)
    if(inview) {
      el.classList.add('inview');
    }
  }

  _navAnimation(el, inview) {
    if(inview) {
        this.header.classList.remove('triggered');
    } else {
        this.header.classList.add('triggered');
    }
  }

  _textAnimation(el, inview) {
    if(inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  _scrollInit() {
    new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false});
    new ScrollObserver('.feature__img', this._inviewAnimation);
    new ScrollObserver('.tween-animate-title', this._textAnimation, {rootMargin: "-100px 0px"});
  }
}