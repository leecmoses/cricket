"use strict";

/////////////////
// MOBILE MENU //
/////////////////

const hamburgerBtn = document.querySelector("[data-nav-hamburger]");
const burgerMenu = document.querySelector(".burger-menu");

hamburgerBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("toggle");
}

/////////////////////
// FORM VALIDATION //
/////////////////////

const form = document.querySelector(".form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const rules = document.getElementById("rules");
const btn = document.getElementById("form-button");

const validation = (e) => {
  firstName.value && lastName.value && email.value && phone.value
    ? btn.removeAttribute("disabled")
    : btn.setAttribute("disabled", 1);
};

form.addEventListener("blur", validation);
form.addEventListener("keyup", validation);
