'use strict'

// SELECTORS
const homeBtn = document.querySelector(".home-btn")
const aboutBtn = document.querySelector(".about-btn")
const productBtn = document.querySelector(".product-btn")
const contactBtn = document.querySelector(".contact-btn")

// CODE
if (window.location.hash === "#home") {
    homeBtn.classList.add("current-link")
}
if (window.location.hash === "#about") {
    aboutBtn.classList.add("current-link")
}
if (window.location.hash === "#products") {
    productBtn.classList.add("current-link")
}
if (window.location.hash === "#contact") {
    contactBtn.classList.add("current-link")
}
