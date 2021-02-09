// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 400) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }

  var scroll = $(window).scrollTop();
  if (scroll >= 63) {
      $(".headerimage").addClass("dark-orange");
      $(".h1.subhead").addClass("light-orange");
  } else {
      $(".headerimage").removeClass("dark-orange");
      $(".h1.subhead").removeClass("light-orange");
  }

  if ($(window).scrollTop() > 209) {
    $('.navbar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 210) {
    $('.navbar').removeClass('navbar-fixed');
  }

});


$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});


$(document).ready(function(){
  $('.featured-work').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 300
  });
  $("[data-toggle=tooltip").tooltip();

});

$(window).load(function() {
  $(".loader").delay( 1500 ).slideUp( 1200 );
})