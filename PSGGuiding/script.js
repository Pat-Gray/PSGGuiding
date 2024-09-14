// set the width of the side nav
function openNav() {
  document.getElementById("side-nav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.querySelector("#main").style.opacity = "0.3";
  document.getElementById("for-opacity").style.opacity = "0.3";
  document.querySelector(".logo1").style.opacity = "0.3";
  document.querySelector(".logo2").style.opacity = "0.3";
}

// set the width of the side nav to 0
function closeNav() {
  document.getElementById("side-nav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.querySelector("#main").style.opacity = "1";
  document.getElementById("for-opacity").style.opacity = "1";
  document.querySelector(".logo1").style.opacity = "1";
  document.querySelector(".logo2").style.opacity = "1";
}



// SCROLL REVEAL
const scrollSettings = {
  duration: 1200,  
  distance: '50px', // Distance the element moves during reveal
  easing: 'ease-in-out', // Easing effect for smooth reveal
}


ScrollReveal().reveal('.intro', scrollSettings);
ScrollReveal().reveal('.products', scrollSettings)
ScrollReveal().reveal('.category_container', scrollSettings)
ScrollReveal().reveal('.testimonial', scrollSettings)
ScrollReveal().reveal('.footer-container', scrollSettings)


