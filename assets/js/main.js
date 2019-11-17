// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
let home = document.getElementById("home");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;
// var sticky = about.offsetTop;
var sticky = home.offsetHeight;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
	navbar.classList.add("sticky");
	navbar.classList.remove("hidden");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("hidden");
  }
}
