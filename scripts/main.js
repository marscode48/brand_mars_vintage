/*=================================================
jQuery
===================================================*/
// $(function() {
//   // ハンバーガーメニュー
//   $('.toggle-btn').on('click', function() {
//     if ($('.header').hasClass('open')) {
//       $('.header').removeClass('open');
//     } else {
//       $('.header').addClass('open');
//     }
//   });

//   // 画面をクリックしたら閉じる
//   $('#mask').on('click', function() {
//     $('.header').removeClass('open');
//   });
// });

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