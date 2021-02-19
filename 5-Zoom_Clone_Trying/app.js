$(document).ready(function () {
  $("#source").hover(function () {
    $(".resources-popup").addClass("visible");
  });
  $(".resources-popup").mouseleave(function () {
    setTimeout(function () {
      $(".resources-popup").removeClass("visible");
    }, 300);
  });
  $("#host-meeting").hover(function () {
    $(".hostmeeting-popup").addClass("active");
  });
  $(".hostmeeting-popup").mouseleave(function () {
    setTimeout(function () {
      $(".hostmeeting-popup").removeClass("active");
    }, 300);
  });
});
