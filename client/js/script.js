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
  const makeButtons = []
  
  makes.data.forEach(make => {
    const carManufacturer = make.manufacturer;
    let makeInfoBtn = `<button class="more-info" id="${carManufacturer}">${carManufacturer}</button>`;
    infoBtns.innerHTML += makeInfoBtn;
    console.log(carManufacturer, "was here");
    const makeBrandBtn = document.querySelector(`#${carManufacturer}`);
    makeButtons.push(makeBrandBtn);
  });

  infoBtns.addEventListener('click', async (event) => {
    mainBody.replaceChildren()
    const clickedButton = event.target;
    // mainBody.innerHTML = ""

    if (clickedButton.classList.contains('more-info')) {
      const carManufacturer = clickedButton.id;
      console.log(`Button clicked: ${carManufacturer}`);
      let optionsAxios = (await axios.get(`${base}options`)).data
      console.log(optionsAxios)
      let optionsDropdown = ""

      let models = (await axios.get(`${base}models`)).data;
      console.log(models)
      models.forEach(model => {
        optionsDropdown = ""
        if (model.make.manufacturer === carManufacturer) {
          
            optionsAxios.forEach((option) => {
              if (model.options.name == option.name) {
                optionsDropdown += `<option value="${option.name}" selected>${option.name}</option>`
              } else {
                optionsDropdown += `<option value="${option.name}">${option.name}</option>`
              }
            })
                     
          let options = getOptionValues(model.options)
          const formattedPrice = model.price.toLocaleString()
          const formattedMileage = model.mileage.toLocaleString()
          const paymentMonthly = model.price / 72
          const formattedMonthly = Math.floor(paymentMonthly.toLocaleString())

          let carText = `<div class="item-holder">
          <img src="${model.image_of_car}" alt="" class="car-pic">
          <h3 class="car-name">${model.year} ${model.name}</h3>
          <p class="miles">${formattedMileage} miles</p>
          <p class="price">Price: $${formattedPrice}</p>
          <h5 class="monthly">$${formattedMonthly}/mo*</h5>
          <select id="drop-down${(model.name).replace(" ", "")}" id="languages">
          ${optionsDropdown}        
          </select>
          <p id="options${(model.name).replace(" ", "")}">Options: ${options.join(", ")}</p>
          </div>`

          mainBody.innerHTML += carText
          console.log(`#drop-down${(model.name).replace(" ", "")}`)
          const dropdown = document.querySelector(`#drop-down${(model.name).replace(" ", "")}`)
          console.log(dropdown)
          
          
          dropdown.addEventListener('change', async function () {
            // const dropdown = document.querySelector('#drop-down')
            const optionsClass = document.querySelector(`options${(model.name).replace(" ", "")}`)
            console.log("************")
            console.log(optionsClass)
            const dropdown = document.querySelector(`#drop-down${(model.name).replace(" ", "")}`)
            const selectedValue = dropdown.value      
            // console.log('Selected Option: ' + selectedValue);
            let optionObject = await getOption(selectedValue)
            console.log(optionObject)
            let optionArr = getOptionValues(optionObject)
            console.log(optionArr)
            // console.log(`****Option ${optionObject}`)
            // console.log(optionObject)
            console.log(optionArr.join(", "))
            optionsClass.innerText = `Options: ${optionArr.join(", ")}`
            await axios.put(`${base}models/${model._id}`, { options: optionObject._id })

      })
        }
      });
    }
  });
}

const modelBtnClick = async () => {
  infoBtns.replaceChildren()
  mainBody.replaceChildren()

  try {
    const modelsResponse = await axios.get(`${base}models`)
    const modelsData = modelsResponse.data

    

    if (modelsData.length > 0) {
      modelsData.forEach((model) => {
        const carText = `<div class="item-holder">
          <img src="${model.image_of_car}" alt="" class="car-pic">
          <h3 class="car-name">${model.year} ${model.name}</h3>
          <p class="miles">${model.mileage.toLocaleString()} miles</p>
          <p class="price">Price: $${model.price.toLocaleString()}</p>
          <h5 class="monthly">$${Math.floor((model.price / 72).toLocaleString())}/mo*</h5>
          <select id="drop-down" id="languages">
            <!-- Add your options here -->
          </select>
          <p id="options">Options: ${getOptionValues(model.options).join(", ")}</p>
        </div>`;

        mainBody.innerHTML += carText;
      })
    } else {
      mainBody.innerHTML = `<div class="not-found">No car models found</div>`;
    }
  } catch (error) {
    console.error(error);
  }
}

const fuelTypeBtnClick = async () => {
  mainBody.replaceChildren()
  infoBtns.replaceChildren()
  for (let i = 0; i < 3; i++) {
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
  infoBtns.replaceChildren()
  mainBody.replaceChildren()
  carName = searchBar.value
  let model = await axios.get(`${base}models`)
  let optionsAxios = (await axios.get(`${base}options`)).data
  console.log(optionsAxios)
  let optionsDropdown = ""
  // optionsAxios.forEach((option) => {
  //   if (true) {
  //     optionsDropdown += `<option value="${option.name}">${option.name}</option>`
  //   } else {

  //   }
  // })

  console.log(model)
  model.data.forEach((car) => {
    // console.log(car)
    if (carName == car.name) {
      optionsAxios.forEach((option) => {
        if (car.options.name == option.name) {
          optionsDropdown += `<option value="${option.name}" selected>${option.name}</option>`
        } else {
          optionsDropdown += `<option value="${option.name}">${option.name}</option>`
        }
      })
      
      
      let options = getOptionValues(car.options)


      const formattedPrice = car.price.toLocaleString()
      const formattedMileage = car.mileage.toLocaleString()

      const paymentMonthly = car.price / 72
      const formattedMonthly = Math.floor(paymentMonthly.toLocaleString())

      let carText = `<div class="item-holder">
        <img src="${car.image_of_car}" alt="" class="car-pic">
        <h3 class="car-name">${car.year} ${carName}</h3>
        <p class="miles">${formattedMileage} miles</p>
        <p class="price">Price: $${formattedPrice}</p>
        <h5 class="monthly">$${formattedMonthly}/mo*</h5>
        <select id="drop-down" id="languages">
        ${optionsDropdown}        
        </select>
        <p id="options">Options: ${options.join(", ")}</p>
        </div>`

      mainBody.innerHTML += carText

      
      const dropdown = document.querySelector('#drop-down')
      const optionsClass = document.querySelector('#options')
      
      dropdown.addEventListener('change', async function () {
        const dropdown = document.querySelector('#drop-down')
        
        const selectedValue = dropdown.value;        
        // console.log('Selected Option: ' + selectedValue);
        let optionObject = await getOption(selectedValue)
        console.log(optionObject)
        let optionArr = getOptionValues(optionObject)
        console.log(optionArr)
        // console.log(`****Option ${optionObject}`)
        // console.log(optionObject)
        console.log(optionArr.join(", "))
        optionsClass.innerText = `Options: ${optionArr.join(", ")}`
        await axios.put(`${base}models/${car._id}`, { options: optionObject._id })

      })
    }

  })
  console.log(mainBody)
  if (!mainBody.innerText) {
    mainBody.innerHTML = `<div class="not-found">"Car not found"</div>`
  }


}

async function getOption(name) {
  let {data} = await axios.get(`${base}options`)
  console.log(data)
  for (let i = 0; i < data.length; i++) {
    console.log(name, data[i].name )
    if (data[i].name == name) {
      console.log('returned')
      console.log(data[i])
      console.log(data[i]._id)
      return data[i]
    }
  }
}

function getOptionValues(options) {
  let optionsArr =[]
  if (options.bluetooth) {
    optionsArr.push("bluetooth")
  }
  if (options.heated_seats) {
    optionsArr.push("heated seats")
  }
  if (options.navigation) {
    optionsArr.push("navigation")
  }
  if (options.remote_start) {
    optionsArr.push("remote start")
  }
  return optionsArr
}

// dropdown.addEventListener('change', function() {
//   // Get the selected value
//   const selectedValue = dropdown.value;
//   console.log('Selected Option: ' + selectedValue);
// })

{/* <p class="price">${car.options.name} Package: ${options.join(", ")}</p> */ }

// ONCLICK ELEMENTS
makeBtn.addEventListener('click', makeBtnClick)
modelBtn.addEventListener('click', modelBtnClick)
fuelTypeBtn.addEventListener('click', fuelTypeBtnClick)
searchButton.addEventListener('click', searchBtnClick)
infoBtns.addEventListener('click', console.log('hi'))

// Add an event listener to detect changes in the selected option
// dropdown.addEventListener('change', function() {
//   // Get the selected value
//   const selectedValue = dropdown.value;
//   console.log('Selected Option: ' + selectedValue);
// })

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