$(document).ready(function () {
  // sticky navigations
  let nav_offset_top = $("#header").height();
  function navbarFixed() {
    if ($("#header").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $("#header .main_menu").addClass("navbar-fixed");
        } else {
          $("#header .main_menu").removeClass("navbar-fixed");
        }
      });
    }
  }
  navbarFixed();

  //isotope

  let $btns = $("#myWork .buttonGroup .button");
  $btns.click(function (e) {
    $("#myWork .buttonGroup .button").removeClass("active");
    e.target.classList.add("active");
    let selector = $(e.target).attr("data-filter");
    $("#myWork .grid").isotope({
      filter: selector,
    });
    return false;
  });
  $("#myWork .buttonGroup #btn1").trigger("click");

  $('[data-fancybox="gallery"]').fancybox({
    loop: true,
    keyboard: true,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
  });
});
