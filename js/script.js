
$(function() {
  $(".toggle_btn").click(function() {
    $("header").toggleClass("open");
  });
});



$(function() {
  $(window).scroll(function() {
    $(".item").each(function() {
      var position = $(this).offset().top;  // 要素の位置
      var scroll = $(window).scrollTop();   // 今のスクロール量
      var windowHeight = $(window).height(); // 画面の高さ

      if (scroll > position - windowHeight + 100) {
        $(this).addClass("show");
      }
    });
  });
});

$(function() {

  // スクロールしたら表示・非表示を切り替える
  $(window).scroll(function() {
    if ($(this).scrollTop() > 900) {
      $(".to-top").addClass("show");
    } else {
      $(".to-top").removeClass("show");
    }
  });

  // クリックしたらTOPへゆっくり戻る
  $(".to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 900);
  });

});

