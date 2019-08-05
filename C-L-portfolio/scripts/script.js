$(document).ready(function() {
  // hamburger script
  $(".hamburger").on("click", function() {
    // toggle class show on the menu, this will show the nav menu
    $(".menu").toggleClass("show");
  });

  // onClick the hamburger icon will replace it with the X icon to close the nav menu
  $('.hamburger').click(function() {
    $("i", this).toggleClass("fa-times");
  });

  // clicking on any anchor tags will remove the show class thus closing the nav menu
  $("a").on("click", function() {
    // clicking an anchor will turn off the nav
    $(".menu").removeClass("show");
    // changing the X icon to hamburger 
    $(".fas.fa-bars").removeClass("fa-times");
  });

  // Flickity
  $(function() {
    $(".main-carousel").flickity({
      contain: true,
      wrapAround: true
    });
  });

  // smooth scroll
  $(function() {
    $("a").smoothScroll({
      speed: 900
    });
  });

});
