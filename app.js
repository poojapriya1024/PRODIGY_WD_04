const apiKey = "09561a1f2b38c40de50bafd2fb138d27";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

const weatherIcon = document.querySelector(".weather-icon");

const weatherDetails = document.querySelector(".weather");
const errorMsg = document.querySelector(".error");

async function checkWeather(city_name) {
    
    const response = await fetch(apiUrl + city_name + `&appdi=${apiKey}`);

    if(response.status == 404)
    {    
        errorMsg.style.display = "block";
        weather.style.display = "none";
    } else {

        var data = await response.json(); // has all information from the city we have used

        // update weather data
        city.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/hr";

        // update weather icons based on the weather
        if(data.weather[0].main == "Clouds") 
            weatherIcon.src = "images/clouds.png";
        else if(data.weather[0].main == "Clear")
            weatherIcon.src = "images/clear.png";
        else if(data.weather[0].main == "Rain")
            weatherIcon.src = "images/rain.png";
        else if(data.weather[0].main == "Drizzle")
            weatherIcon.src = "images/drizzle.png";
        else if(data.weather[0].main == "Mist")
            weatherIcon.src = "images/mist.png";

        weatherDetails.style.display = "block";
        errorMsg.style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

});




