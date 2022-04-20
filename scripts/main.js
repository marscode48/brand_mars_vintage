/*=================================================
JavaScript
===================================================*/
const btn = document.querySelector('.toggle-btn');
const header = document.querySelector('.header')
const mask = document.querySelector('#mask')

// ハンバーガーメニュー
btn.addEventListener('click', function() {
  header.classList.toggle('open')
});

// 画面をクリックしたら閉じる
mask.addEventListener('click', function() {
  header.classList.remove('open')
});

// ここから記述
document.addEventListener('DOMContentLoaded', function () {
  const main = new Main();
});

class Main {
  constructor() {
    this._init();
    // this._scrollInit();
  }

  _init() {
    // new MenuOpen();
    // new SmoothScroll(80);
    new HeroSlider('.swiper');
  }

  // _inviewAnimation(el, inview) {
  //   console.log(el)
  //   console.log(inview)
  //   if(inview) {
  //     el.classList.add('inview');
  //   }
  // }

  // _scrollInit() {
  //   new ScrollObserver('.feature__img', this._inviewAnimation);
  // }
}