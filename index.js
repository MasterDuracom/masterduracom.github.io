window.onscroll = function() {topNav()};
        
const navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
        
function topNav() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}

function openResponsive() {
    const x = document.getElementById("myNavbar");

    if (x.className === "bottom-navbar") {
    x.className += " responsive";
    } else {
    x.className = "bottom-navbar";
    }
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}