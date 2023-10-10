const db = require('../db')
const Make = require('../models/makes')
const Model = require('../models/models')
const Option = require('../models/options')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const optionBase = await new Universe({
            name:"Base",
            heated_seats: true,
            bluetooth: false,
            navigation: false,
            remote_start: false
        })
        optionBase.save()

    const optionPremium = await new Universe({
            name:"Premium",
            heated_seats: true,
            bluetooth: true,
            navigation: true,
            remote_start: false
        })
        optionPremium.save()

    const optionLuxury = await new Universe({
            name:"Luxury",
            heated_seats: true,
            bluetooth: true,
            navigation: true,
            remote_start: true
        })
        optionLuxury.save()


    const makeToyota = await new Universe({
            manufacturer: "Toyota",
            logo: "toyota_logo.png"
        })
        makeToyota.save()

    const makeHonda = await new Universe({
            manufacturer: "Honda",
            logo: "honda_logo.png"
        })
        makeHonda.save()

    const makeMercedes = await new Universe({
            manufacturer: "Mercedes",
            logo: "Mercedes_logo.png"
        })
        makeMercedes.save()
    
    const makeFord= await new Universe({
            manufacturer: "Ford",
            logo: "Ford_logo.png"
        })
        makeFord.save()

    const makeSubaru = await new Universe({
            manufacturer: "Subaru",
            logo: "Subaru_logo.png"
        })
        makeSubaru.save()

    console.log('Created makes')

    const models = [
        // Toyota
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Toyota_Image_1",
          year: 2022,
          name: "Toyota Camry",
          mileage: 15000,
          price: 30000,
          transmission: "Automatic",
          drivetrain: "Front-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "LE",
          color: "Silver",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Toyota_Image_2",
          year: 2023,
          name: "Toyota RAV4",
          mileage: 12000,
          price: 35000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Hybrid",
          trim: "XLE",
          color: "Blue",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Toyota_Image_3",
          year: 2022,
          name: "Toyota Corolla",
          mileage: 18000,
          price: 25000,
          transmission: "Manual",
          drivetrain: "Front-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "SE",
          color: "Red",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Toyota_Image_4",
          year: 2023,
          name: "Toyota Highlander",
          mileage: 20000,
          price: 40000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Limited",
          color: "White",
          options: mongoose.Types.ObjectId()
        },
      
        // Honda
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Honda_Image_1",
          year: 2023,
          name: "Honda Accord",
          mileage: 16000,
          price: 28000,
          transmission: "Automatic",
          drivetrain: "Front-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Sport",
          color: "Black",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Honda_Image_2",
          year: 2022,
          name: "Honda Civic",
          mileage: 14000,
          price: 24000,
          transmission: "Automatic",
          drivetrain: "Front-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "EX",
          color: "Gray",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Honda_Image_3",
          year: 2023,
          name: "Honda CR-V",
          mileage: 10000,
          price: 32000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Hybrid",
          trim: "Touring",
          color: "Green",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Honda_Image_4",
          year: 2022,
          name: "Honda Pilot",
          mileage: 19000,
          price: 38000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Elite",
          color: "Silver",
          options: mongoose.Types.ObjectId()
        },
      
        // Mercedes
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Mercedes_Image_1",
          year: 2023,
          name: "Mercedes-Benz C-Class",
          mileage: 8000,
          price: 45000,
          transmission: "Automatic",
          drivetrain: "Rear-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "C 300",
          color: "Blue",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Mercedes_Image_2",
          year: 2022,
          name: "Mercedes-Benz E-Class",
          mileage: 9000,
          price: 55000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Hybrid",
          trim: "E 450",
          color: "Black",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Mercedes_Image_3",
          year: 2023,
          name: "Mercedes-Benz GLC",
          mileage: 7500,
          price: 50000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "GLC 300",
          color: "White",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Mercedes_Image_4",
          year: 2022,
          name: "Mercedes-Benz GLE",
          mileage: 8200,
          price: 60000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Hybrid",
          trim: "GLE 450",
          color: "Red",
          options: mongoose.Types.ObjectId()
        },
      
        // Ford
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Ford_Image_1",
          year: 2023,
          name: "Ford Mustang",
          mileage: 7500,
          price: 40000,
          transmission: "Manual",
          drivetrain: "Rear-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "GT",
          color: "Yellow",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Ford_Image_2",
          year: 2022,
          name: "Ford F-150",
          mileage: 8200,
          price: 45000,
          transmission: "Automatic",
          drivetrain: "Four-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Lariat",
          color: "Gray",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Ford_Image_3",
          year: 2023,
          name: "Ford Escape",
          mileage: 6500,
          price: 32000,
          transmission: "Automatic",
          drivetrain: "Front-Wheel Drive",
          fuel_type: "Hybrid",
          trim: "SEL",
          color: "Green",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Ford_Image_4",
          year: 2022,
          name: "Ford Explorer",
          mileage: 9800,
          price: 38000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Limited",
          color: "Silver",
          options: mongoose.Types.ObjectId()
        },
      
        // Subaru
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Subaru_Image_1",
          year: 2023,
          name: "Subaru Outback",
          mileage: 7000,
          price: 35000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Limited",
          color: "Blue",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Subaru_Image_2",
          year: 2022,
          name: "Subaru Impreza",
          mileage: 6400,
          price: 27000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Sport",
          color: "Red",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Subaru_Image_3",
          year: 2023,
          name: "Subaru Forester",
          mileage: 8000,
          price: 32000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Premium",
          color: "White",
          options: mongoose.Types.ObjectId()
        },
        {
          make: mongoose.Types.ObjectId(),
          image_of_car: "Subaru_Image_4",
          year: 2022,
          name: "Subaru Legacy",
          mileage: 7500,
          price: 30000,
          transmission: "Automatic",
          drivetrain: "All-Wheel Drive",
          fuel_type: "Gasoline",
          trim: "Base",
          color: "Silver",
          options: mongoose.Types.ObjectId()
        }
    ]
      
    console.log('Created models');

}