'use strict';

const nav = document.querySelector("nav");
const navList = document.querySelectorAll(".nav-links ul li");
const navLinks = document.getElementById("navLinks");



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/*$(document).ready(funnction() {
  let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  if (isMobile) {
    console.log("Mobile");
  }else {
    alert("Desktop");
  }
});*/


/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("nav");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("nav-active");
  } else {
    header.classList.remove("nav-active");
  }
}
window.addEventListener("scroll", headerActive);


const wrapper = document.querySelector('.cards-wrapper');
const dots = document.querySelectorAll('.dot');
const slider = document.getElementsByClassName('.cards-wrapper')[0];
let activeDot = 0;

/* slider.addEventListener('touchstart', handleTouchStart, false);
slider.addEventListener('touchmove', handleTouchMove, false);
let xDown = null;

function handleTouchStart(evt) {
  let xDown = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
  if (!xDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let xDiff = xDown - xUp;

  if (xDiff > 0) {
    console.log("Right");
  } else {
    console.log("Left");
  }
  xDown = null;
} */

dots.forEach((dot, idx) => {
  dot.setAttribute('data-num', idx);

  dot.addEventListener('click', (e) => {
    let clickedDot = e.target.dataset.num;

    if(clickedDot == activeDot) {
      return;
    }
    else {
      let slideArea = wrapper.parentElement.clientWidth;
      let pixels = -slideArea * clickedDot;
      
      wrapper.style.transform = 'translateX('+ pixels + 'px)';

      dots[activeDot].classList.remove('active');
      dots[clickedDot].classList.add('active'); 
      activeDot = clickedDot;
    }
  });
});

