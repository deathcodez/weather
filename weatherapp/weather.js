 const apikey = "a5c037cc8c34d0b535094391e286b592";
      const btn = document.getElementById("btn");
      const input = document.querySelector("input");
      const icon = document.querySelector(".icon");
      const temperature = document.querySelector(".temperature");
      const weather = document.querySelector(".weather");
      const discription = document.querySelector(".discription");

      let a =
        "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

      btn.addEventListener("click", () => {
        let city =input.value;
        getWeather(city)
      });
      function getWeather(city){
        console.log(city);
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"a5c037cc8c34d0b535094391e286b592"}`).then(response=>response.json()).then(data=>{
            if(data.cod === 200){
                
            console.log(data)
            const iconcode=data.weather[0].icon
            icon.innerHTML=`<img src="http://openweathermap.org/img/w/${iconcode}.png" alt="weather icon"/>`

            const weathercity=data.name;
            const weathercountry = data.sys.country;
            weather.innerHTML=`${weathercity},${weathercountry}`
            //    yaha const nai liya because temperaturechange hote rhega 
            let weathertemperatur= data.main.temp
            weathertemperatur=weathertemperatur-270
            let temp=weathertemperatur.toFixed(2)
            temperature.innerHTML=`${temp}°c`
            
            // description yaha se hai
            const weatherdescription=data.weather[0].description;
            discription.innerHTML=weatherdescription;
 
} else {
    weather.innerHTML="put correct city name "
}

       

        })
      

}
const reporterDiv = document.getElementById("coments");
const flirtyTexts = [
    "Hey babe, I’m Ema 😘—your hot weather plug. City please?",
    "Forecast’s hot… just like me 🔥. Drop your city 😉.",
    "Ema reporting 🌸—tell me your city, cutie.",
    "Wanna know if it’s hotter than me? 😏 Type your city.",
    "Your spicy weather girl’s here 🌶️. City, please?"
];
const randomText = flirtyTexts[Math.floor(Math.random() * flirtyTexts.length)];
reporterDiv.innerText = randomText;