console.log('App.js working')


//! selectors

const form = document.querySelector("form")
const input = document.querySelector("form input.from-control")

//! Variables

let apiKey ="a6fba546794368e599caa61366178cab"
let url; // api istegi icin kullanilacak
let units = "metric" // fahrenheit için "imperial" yazilir.
let lang = "en"

//! Event listeners

form.addEventListener("submit", (e)=>{

e.preventDefault();
console.log(input.value);

if (input.value){
    const city = input.value
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=${apiKey}`
    
    getWeatherData()

    
}


})

//! Functions

const getWeatherData = async() =>{
    try{
       const response = await fetch(url)
       console.log(response);
    } catch (error){

    }
}