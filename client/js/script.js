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
  infoBtns.replaceChildren()
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
  let model = await axios.get(`${base}models`)
  console.log(model)
  model.data.forEach((car) => {
    console.log(car)
    if (carName == car.name) {
      let options = []
      if (car.options.bluetooth) {
        options.push("bluetooth")
      }
      if (car.options.heated_seats) {
        options.push("heated seats")
      }
      if (car.options.navigation) {
        options.push("navigation")
      }
      if (car.options.remote_start) {
        options.push("remote start")
      }
      let carText = `<div class="item-holder">
        <img src="${car.image_of_car}" alt="" class="car-pic">
        <h3 class="car-name">${carName}</h3>
        <p class="price">$${car.price}</p>
        <p class="price">${car.options.name} Package: ${options.join(", ")}</p>
        </div>`
        mainBody.innerHTML += carText
      }   
  })
  console.log(mainBody)
  if (!mainBody.innerText) {
    mainBody.innerHTML = `<div class="not-found">"Car not found"</div>`
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