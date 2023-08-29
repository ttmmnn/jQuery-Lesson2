//　上から下へスライドさせる
// $(function () {
//   $('.box1').slideDown();
// });

// 下から上へスライドさせる
// $(function () {
//   $('.box1').slideUp();
// });

// 非表示の要素をjQueryで表示させる
// $(function () {
//   $('.box1').show();
//   $('.box1').css({ 'background-color': '#0000FF' });
// });

// 表示されている要素をjQueryで非表示にする
// $(function () {
//   $('.box1').hide();
// });

//要素を上から下へスライドさせた後、
//赤色の正方形を青色の長方形（幅200px、高さ100px）に変更
// $(function () {
//   $('.box1').slideDown(3000, function () {
//     $('.box1')
//       .css({
//         'background-color': '#0000FF',
//         width: '200px',
//         height: '100px',
//       })
//       .slideUp(3000);
//   });
// });

//　マウスオーバー、マウスアウトイベント
// $(function () {
//   $('.box1').mouseover(function () {
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function () {
//     $('.box1').removeClass('box1-ext');
//   });
// });

//　マウスクリックイベント
$(function () {
  $('.box1').on('click', function () {
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function () {
    $('.box1').removeClass('box1-ext');
  });
});
