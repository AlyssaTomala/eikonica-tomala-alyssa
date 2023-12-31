function changeBg() {
  var navbar = document.getElementById("navbar");
  var scrollValue = window.scrollY;
  if (scrollValue < 300) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}

window.addEventListener("scroll", changeBg);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var burger = document.querySelector(".burger-test");
var navigation = document.querySelector(".burger-nav");
var openNavigation = function (event) {
  event.preventDefault();
  navigation.classList.toggle("is-open");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", openNavigation);
