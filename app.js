function updateWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
 let cityElement=document.querySelector("#city");
 let descriptionElement=document.querySelector("#description");
 let humidityElement=document.querySelector("#humidity");
 let windSpeedElement=document.querySelector("#wind-speed");
 let timeElement=document.querySelector("#time");
 let date= new Date(response.data.time * 1000);
 let iconElement=document.querySelector("#icon");

 cityElement.innerHTML=response.data.city;
 humidityElement.innerHTML=`${response.data.temperature.humidity}`;
 descriptionElement.innerHTML= response.data.condition.description;
 windSpeedElement.innerHTML=`${response.data.wind.speed}km/h`;
 timeElement.innerHTML=formatDate(date);
 temperatureElement.innerHTML=Math.round(temperature);
 iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;


}

function formatDate(date){
    let minutes= date.getMinutes();
    let hours =date.getHours();

    let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    let day = days[date.getDay()];

 if (minutes < 10){
    minutes= `0${minutes}`;
 }
 return `${day} ${hours} : ${minutes}`;
}


function searchCity(city){
    let apiKey="6o839fc2f6c15f59b0t9a2b6fa44a10b";
    let apiURL= ` https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiURL).then(updateWeather);

}



function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    searchCity (searchInput.value);
}


let searchFormatElement=document.querySelector("#search-form");
searchFormatElement.addEventListener("submit",handleSearchSubmit);

searchCity("Polokwane");