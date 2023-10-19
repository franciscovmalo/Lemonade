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
