/* Top scroll */

document.querySelector(".nav__logo").addEventListener("click", function () {
  window.scrollTo(0, 0);
})

/* Show mobile menu */

function toggleClass() {
  let menu = document.querySelector(".menu__list");
  menu.classList.toggle("display-menu");
}

document.querySelector(".hamburger").addEventListener("click", toggleClass)


/* Toggle icons */

 function toggleIcons() {
   let icon = document.querySelector(".mobile-icon__js");

   if (icon.classList.contains('im-menu')) {
      icon.classList.replace('im-menu', 'im-x-mark');
   } else {
      icon.classList.replace('im-x-mark', 'im-menu');
} 

}

document.querySelector(".hamburger").addEventListener("click", toggleIcons)

/* Header class after scroll */

let scrollposition = window.scrollY
const header = document.querySelector("header")
const nav = document.querySelector(".menu__list")
const changingPoint = header.offsetHeight

window.addEventListener("scroll", function() {
  scrollposition = window.scrollY

  if (scrollposition > 150) {
    header.classList.add("header__scrolled")
    nav.classList.add("menu__list-onscroll")
  } else {
    header.classList.remove("header__scrolled")
    nav.classList.remove("menu__list-onscroll")
  }
})




/* Portfolio accordion */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
  

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      

    } else {

      panel.style.maxHeight = panel.scrollHeight + "px";
    
      
    }
  });
}

/* Accordion X */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var close = this.previousElementSibling;
  

    if (close.classList.contains('im-x-mark')) {
      close.classList.remove('im-x-mark');
      

    } else {

      close.classList.add('im-x-mark');
    
      
    }
  });
}