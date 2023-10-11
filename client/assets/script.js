// JS File
// DOM ELEMENTS
let searchBar = document.querySelector('.search-bar')
let searchButton = document.querySelector('.search-button')
let mainBody = document.querySelector('.main-body')

let carText = `<div class="item-holder">
<img src="" alt="" class="car-pic">
<h3 class="car-name">hi</h3>
<p class="price">price</p>
</div>`

const clearMainBody = () => {
    mainBody.innerHTML = ''
}

searchButton.addEventListener('click', () => {
    // clearMainBody()
    console.log('hi')
    mainBody.innerHTML = carText
})


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