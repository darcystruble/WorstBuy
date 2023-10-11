// JS File
// DOM ELEMENTS
let searchBar = document.querySelector('.search-bar')
let searchButton = document.querySelector('.search-button')
let mainBody = document.querySelector('.main-body')

// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const navLink = document.querySelectorAll('.nav-link')

const mobileMenu = () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
}

const closeMenu = () => {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
}

hamburger.addEventListener('click', mobileMenu)
navLink.forEach(link => link.addEventListener('click', closeMenu))

let newText = '<p>HELLO!!</p>'

searchButton.addEventListener('click', () => {
    console.log('hi')
})