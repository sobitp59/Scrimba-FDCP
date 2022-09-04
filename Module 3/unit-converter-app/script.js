
let meterTofeet = document.querySelector('.cards--meter')
let litresToGallons = document.querySelector('.cards--volume')
let kiloToPound = document.querySelector('.cards--mass')
let userInput = document.querySelector('.header__input')
let convertBtn = document.querySelector('.header__btn')

convertBtn.addEventListener('click',()=>{
    let userInputValue = Number(userInput.value)

    if(userInputValue < 1){
        alert(`Please enter value greater than 0`)
    }

    unitConversion(userInputValue, 'meterTofeet')
    unitConversion(userInputValue, 'litresToGallons')
    unitConversion(userInputValue, 'kiloToPound')
})


let metersToFeet = 3.280839895
let litreToGallons = 0.264172
let kgToPound = 2.20462

function unitConversion(value, printData){

    // meter to feet and feet to meter
    if(printData === 'meterTofeet'){
        let ft = (value * metersToFeet).toFixed(3)
        let mt = (value / metersToFeet).toFixed(3)
        let result = `${value} meters = ${ft} feet | ${value} feet = ${mt} meters`
        meterTofeet.textContent =  result
    }

    // litres to gallons and gallons to litres
    else if(printData === 'litresToGallons'){
        let gl = (value * litreToGallons).toFixed(3)
        let lt = (value / litreToGallons).toFixed(3)
        let result = `${value} gallons = ${gl} litres | ${value} litres = ${lt} gallons`
        litresToGallons.textContent =  result
    }

    // kilo to pounds and pounds to kilos
    else if(printData === 'kiloToPound'){
        let pd = (value * kgToPound).toFixed(3)
        let kl = (value / kgToPound).toFixed(3)
        let result = `${value} kilos = ${pd} pounds | ${value} pounds = ${kl} kilos`
        kiloToPound.textContent =  result
    }    

}