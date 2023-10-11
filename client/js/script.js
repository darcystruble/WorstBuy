// DOM ELEMENTS
const searchBar = document.querySelector('.search-bar')
const searchButton = document.querySelector('.search-button')
const mainBody = document.querySelector('.main-body')
const newBtn = document.querySelector('#new')
const usedBtn = document.querySelector('#used')
const electricBtn = document.querySelector('#electric')

// VARIABLES
let carImg
let carName
let carPrice

// FUNCTIONS
const newBtnClick = async () => {
  mainBody.replaceChildren()
  for(let i = 0; i < 7; i++){
    console.log('hi')
    let carText = `<div class="item-holder">
    <img src="" alt="" class="car-pic">
    <h3 class="car-name">hi${i}</h3>
    <p class="price">price</p>
    </div>`
    mainBody.innerHTML += carText
  }
}

const usedBtnClick = async () => {
  mainBody.replaceChildren()
  for(let i = 0; i < 5; i++){
    console.log('hi')
    let carText = `<div class="item-holder">
    <img src="" alt="" class="car-pic">
    <h3 class="car-name">hi${i}</h3>
    <p class="price">price</p>
    </div>`
    mainBody.innerHTML += carText
  }
}

const electricBtnClick = async () => {
  mainBody.replaceChildren()
  for(let i = 0; i < 3; i++){
    console.log('hi')
    let carText = `<div class="item-holder">
    <img src="" alt="" class="car-pic">
    <h3 class="car-name">hi${i}</h3>
    <p class="price">price</p>
    </div>`
    mainBody.innerHTML += carText
  }
}

const searchBtnClick = async () => {
  mainBody.replaceChildren()
  carName = searchBar.value
    for(let i = 0; i < 10; i++){
      console.log('hi')
      let carText = `<div class="item-holder">
      <img src="" alt="" class="car-pic">
      <h3 class="car-name">${carName}</h3>
      <p class="price">${i}</p>
      </div>`
      mainBody.innerHTML += carText
    }
}
 
// ONCLICK ELEMENTS
newBtn.addEventListener('click', newBtnClick)
usedBtn.addEventListener('click', usedBtnClick)
electricBtn.addEventListener('click', electricBtnClick)
searchButton.addEventListener('click', searchBtnClick)

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