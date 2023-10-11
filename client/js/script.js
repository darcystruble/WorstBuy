// DOM ELEMENTS
const searchBar = document.querySelector('.search-bar')
const searchButton = document.querySelector('.search-button')
const mainBody = document.querySelector('.main-body')
const newBtn = document.querySelector('#new')
const usedBtn = document.querySelector('#used')
const electricBtn = document.querySelector('#electric')

// VARIABLES
let carText

// FUNCTIONS
const clearMainBody = () => {
    mainBody.innerHTML = ''
}
const newBtnClick = async () => {}

const usedBtnClick = async () => {}

const electricBtnClick = async () => {}

// ONCLICK ELEMENTS
searchButton.addEventListener('click', () => {
    for(let i = 0; i < 10; i++){
      console.log('hi')
      carText = `<div class="item-holder">
      <img src="" alt="" class="car-pic">
      <h3 class="car-name">hi${i}</h3>
      <p class="price">price</p>
      </div>`
      mainBody.innerHTML += carText
    }
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