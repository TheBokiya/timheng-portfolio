// ===== Scroll to Top ====
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(300); // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(300); // Else fade out the arrow
  }
});
$('#return-to-top').click(function() { // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0 // Scroll to top of body
  }, 500);
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos)
    document.getElementById("navbar").style.top = "0";
  else 
    document.getElementById("navbar").style.top = "-80px";
  prevScrollpos = currentScrollPos;
}

//Force turbolinks to load fontawesome
$(document).on("turbolinks:load", function(){
  return FontAwesome.dom.i2svg();
})
