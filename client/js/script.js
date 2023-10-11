// DOM ELEMENTS
const searchBar = document.querySelector('.search-bar')
const searchButton = document.querySelector('.search-button')
const infoBtns = document.querySelector('.info-button')
const mainBody = document.querySelector('.main-body')
const makeBtn = document.querySelector('#new')
const modelBtn = document.querySelector('#used')
const fuelTypeBtn = document.querySelector('#electric')

// VARIABLES
let carImg
let carName
let carPrice
let carManufacturer
const base = 'http://localhost:3001/'

// FUNCTIONS
const tester = async () => {
  let testing = await axios.get(`${base}makes`)
  console.log(testing.data)
}
tester()

  //     let carText = `<div class="item-holder">
  //     <img src="" alt="" class="car-pic">
  //     <h3 class="car-name">${carName}</h3>
  //     <p class="price">price</p>
  //     </div>`

const makeBtnClick = async () => {
  infoBtns.replaceChildren()
  mainBody.replaceChildren()
  let makes = await axios.get(`${base}makes`)

  makes.data.forEach((make) => {
    carManufacturer = make.manufacturer
    let makeInfoBtn = `<button class="more-info">${carManufacturer}</button>`
    infoBtns.innerHTML += makeInfoBtn
  })
}

const modelBtnClick = async () => {
  mainBody.replaceChildren()
  let testing = await axios.get(`${base}models`)
}

const fuelTypeBtnClick = async () => {
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
makeBtn.addEventListener('click', makeBtnClick)
modelBtn.addEventListener('click', modelBtnClick)
fuelTypeBtn.addEventListener('click', fuelTypeBtnClick)
searchButton.addEventListener('click', searchBtnClick)
infoBtns.addEventListener('click', console.log('hi'))


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