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

// mountaineering code slideshow
let mindex = 0;
displayImages0();
function displayImages0() {
  let i;
  const images = document.getElementsByClassName("climb");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  mindex++;
  if (mindex > images.length) {
    mindex = 1;
  }
  images[mindex - 1].style.display = "block";
  setTimeout(displayImages0, 5000);
}

// ski code slideshow
let sindex = 0;
displayImages1();
function displayImages1() {
  let i;
  const images = document.getElementsByClassName("skiing");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  sindex++;
  if (sindex > images.length) {
    sindex = 1;
  }
  images[sindex - 1].style.display = "block";
  setTimeout(displayImages1, 5000);
}
// expedition code slideshow
let eindex = 0;
displayImages2();
function displayImages2() {
  let i;
  const images = document.getElementsByClassName("expedition");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  eindex++;
  if (eindex > images.length) {
    eindex = 1;
  }
  images[eindex - 1].style.display = "block";
  setTimeout(displayImages2, 5000);
}
