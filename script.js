$(document).ready(function(){
  $(".mobile-nav i").click(function(){
      $(".site-nav-menu").toggleClass("mobile-menu");
  });
});

$(".animated-progress span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    8000
  );
  $(this).text($(this).attr("data-progress") + "%");
});

