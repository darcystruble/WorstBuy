const db = require('../config/db')
const Make = require('../models/makes')
const Model = require('../models/models')
const Option = require('../models/options')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const optionBase = await new Option({
            name:"Base",
            heated_seats: true,
            bluetooth: false,
            navigation: false,
            remote_start: false
        })
        optionBase.save()

    const optionPremium = await new Option({
            name:"Premium",
            heated_seats: true,
            bluetooth: true,
            navigation: true,
            remote_start: false
        })
        optionPremium.save()

    const optionLuxury = await new Option({
            name:"Luxury",
            heated_seats: true,
            bluetooth: true,
            navigation: true,
            remote_start: true
        })
        optionLuxury.save()

    console.log("Created options")

    const makeToyota = await new Make({
            manufacturer: "Toyota",
            logo: "https://images.unsplash.com/photo-1546545817-27f0fb006153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
        })
        makeToyota.save()

    const makeHonda = await new Make({
            manufacturer: "Honda",
            logo: "https://images.unsplash.com/photo-1519429893275-fa1eb00397e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZGElMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        })
        makeHonda.save()

    const makeMercedes = await new Make({
            manufacturer: "Mercedes",
            logo: "https://images.unsplash.com/photo-1625074692991-b57f8ff90df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        })
        makeMercedes.save()
    
    const makeFord= await new Make({
            manufacturer: "Ford",
            logo: "https://images.unsplash.com/photo-1617298005771-f37aa5d7d0cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
        })
        makeFord.save()

    const makeSubaru = await new Make({
            manufacturer: "Subaru",
            logo: "https://images.unsplash.com/photo-1644004481797-eebb410ad624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3ViYXJ1JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
        })
        makeSubaru.save()

    console.log('Created makes')

    const models = [
        // Toyota
        {
          make: makeToyota._id,
          image_of_car: "https://images.pexels.com/photos/11285174/pexels-photo-11285174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          year: 2022,
          name: "Toyota Camry",
          mileage: 15000,
          price: 30000,
          transmission: "Automatic",
          drivetrain: "Front-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "LE",
          color: "Silver",
          options: optionBase._id
        },
        {
          make: makeToyota._id,
          image_of_car: "https://images.pexels.com/photos/9615358/pexels-photo-9615358.jpeg?auto=compress&cs=tinysrgb&w=400",
          year: 2023,
          name: "Toyota RAV4",
          mileage: 12000,
          price: 35000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Hybrid",
          trim: "XLE",
          color: "Blue",
          options: optionLuxury._id
        },
        {
          make: makeToyota._id,
          image_of_car: "https://images.pexels.com/photos/17932828/pexels-photo-17932828/free-photo-of-red-toyota-supra-at-night.jpeg?auto=compress&cs=tinysrgb&w=400",
          year: 2022,
          name: "Toyota Corolla",
          mileage: 18000,
          price: 25000,
          transmission: "Manual",
          drivetrain: "Front-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "SE",
          color: "Red",
          options: optionPremium._id
        },
        {
          make: makeToyota._id,
          image_of_car: "https://images.pexels.com/photos/11030018/pexels-photo-11030018.jpeg?auto=compress&cs=tinysrgb&w=400",
          year: 2023,
          name: "Toyota Highlander",
          mileage: 20000,
          price: 40000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Limited",
          color: "White",
          options: optionLuxury._id
        },
      
        // Honda
        {
          make: makeHonda._id,
          image_of_car: "https://images.pexels.com/photos/16387777/pexels-photo-16387777/free-photo-of-custom-honda-accord.jpeg?auto=compress&cs=tinysrgb&w=400",
          year: 2023,
          name: "Honda Accord",
          mileage: 16000,
          price: 28000,
          transmission: "Automatic",
          drivetrain: "Front-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Sport",
          color: "Black",
          options: optionBase._id
        },
        {
          make: makeHonda._id,
          image_of_car: "https://images.pexels.com/photos/6794815/pexels-photo-6794815.jpeg?auto=compress&cs=tinysrgb&w=400",
          year: 2022,
          name: "Honda Civic",
          mileage: 14000,
          price: 24000,
          transmission: "Automatic",
          drivetrain: "Front-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "EX",
          color: "Gray",
          options: optionBase._id
        },
        {
          make: makeHonda._id,
          image_of_car: "https://images.unsplash.com/photo-1623597780975-38ccd5030c83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9uZGElMjBjcnZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
          year: 2023,
          name: "Honda CR-V",
          mileage: 10000,
          price: 32000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Hybrid",
          trim: "Touring",
          color: "Silver",
          options: optionPremium._id
        },
        {
          make: makeHonda._id,
          image_of_car: "https://images.unsplash.com/photo-1605542203960-755c74d81964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmRhJTIwc3V2fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
          year: 2022,
          name: "Honda Pilot",
          mileage: 19000,
          price: 38000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Elite",
          color: "White",
          options: optionPremium._id
        },
      
        // Mercedes
        {
          make: makeMercedes._id,
          image_of_car: "https://images.unsplash.com/photo-1652549424658-fac6f10a22ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVyY2VkZXMlMjBjJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
          year: 2023,
          name: "Mercedes-Benz C-Class",
          mileage: 8000,
          price: 45000,
          transmission: "Automatic",
          drivetrain: "Rear-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "C 300",
          color: "Blue",
          options: optionPremium._id
        },
        {
          make: makeMercedes._id,
          image_of_car: "https://images.unsplash.com/photo-1602613893218-d059f21f4c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBlJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
          year: 2022,
          name: "Mercedes-Benz E-Class",
          mileage: 9000,
          price: 55000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Hybrid",
          trim: "E 450",
          color: "Gray",
          options: optionLuxury._id
        },
        {
          make: makeMercedes._id,
          image_of_car: "https://images.unsplash.com/photo-1619467177559-e89cca6d9263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBnbGN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
          year: 2023,
          name: "Mercedes-Benz GLC",
          mileage: 7500,
          price: 50000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "GLC 300",
          color: "White",
          options: optionLuxury._id
        },
        {
          make: makeMercedes._id,
          image_of_car: "https://images.unsplash.com/photo-1692970094412-8d701315773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lcmNlZGVzJTIwZ2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
          year: 2022,
          name: "Mercedes-Benz GLE",
          mileage: 8200,
          price: 60000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Hybrid",
          trim: "GLE 450",
          color: "Black",
          options: optionPremium._id
        },
      
        // Ford
        {
          make: makeFord._id,
          image_of_car: "https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZCUyMG11c3Rhbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
          year: 2023,
          name: "Ford Mustang",
          mileage: 7500,
          price: 40000,
          transmission: "Manual",
          drivetrain: "Rear-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "GT",
          color: "Orange",
          options: optionLuxury._id
        },
        {
          make: makeFord._id,
          image_of_car: "https://images.unsplash.com/photo-1551830820-330a71b99659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZCUyMGYxNTB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
          year: 2022,
          name: "Ford F-150",
          mileage: 8200,
          price: 45000,
          transmission: "Automatic",
          drivetrain: "Four-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Lariat",
          color: "Blue",
          options: optionPremium._id
        },
        {
          make: makeFord._id,
          image_of_car: "https://images.pexels.com/photos/1211771/pexels-photo-1211771.jpeg?auto=compress&cs=tinysrgb&w=400",
          year: 2023,
          name: "Ford Escape",
          mileage: 6500,
          price: 32000,
          transmission: "Automatic",
          drivetrain: "Front-Wheel Drive",
          fuel_type: "Hybrid",
          trim: "SEL",
          color: "Red",
          options: optionBase._id
        },
        {
          make: makeFord._id,
          image_of_car: "https://images.unsplash.com/photo-1670069248681-2c14b93bda1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
          year: 2022,
          name: "Ford Explorer",
          mileage: 9800,
          price: 38000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Limited",
          color: "Black",
          options: optionPremium._id
        },
      
        // Subaru
        {
          make: makeSubaru._id,
          image_of_car: "https://images.unsplash.com/photo-1546023165-1c4a1b59f2b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3ViYXJ1JTIwb3V0YmFja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
          year: 2023,
          name: "Subaru Outback",
          mileage: 7000,
          price: 35000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Limited",
          color: "Blue",
          options: optionBase._id
        },
        {
          make: makeSubaru._id,
          image_of_car: "https://images.unsplash.com/photo-1611609054395-246e4000ad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3ViYXJ1JTIwaW1wcmV6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
          year: 2022,
          name: "Subaru Impreza",
          mileage: 6400,
          price: 27000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Sport",
          color: "Red",
          options: optionBase._id
        },
        {
          make: makeSubaru._id,
          image_of_car: "https://images.unsplash.com/photo-1631913551163-0dd28fd69e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3ViYXJ1JTIwZm9yZXN0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
          year: 2023,
          name: "Subaru Forester",
          mileage: 8000,
          price: 32000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Premium",
          color: "White",
          options: optionPremium._id
        },
        {
          make: makeSubaru._id,
          image_of_car: "https://images.unsplash.com/photo-1616804087673-cdcd32e5578f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3ViYXJ1JTIwbGVnYWN5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
          year: 2022,
          name: "Subaru Legacy",
          mileage: 7500,
          price: 30000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Base",
          color: "White",
          options: optionLuxury._id
        }
    ]
    await Model.insertMany(models)
    console.log('Created models');
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()