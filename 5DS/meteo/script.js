// Recupero gli elementi di interesse dalla pagina
const htmlElement = document.documentElement;
const suggestion = document.querySelector('.suggestion');
const weatherIcon = document.querySelector('.weather-icon');
const weatherLocation = document.querySelector('.weather-location');
const weatherTemperature = document.querySelector('.weather-temperature');

//posizione
navigator.geolocation.getCurrentPosition(onSuccess, onError);


//funzione da eseguire in caso di errore

function onError(){
    weatherLocation.innerText = '';
    weatherIcon.alt = "Geolocation disattivata";
    weatherIcon.src = "images/geolocation_disabled.png";
    suggestion.innerText = 'Attiva la geolocalizzazione';

    htmlElement.className = '';
}

async function onSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position);

    const API_KEY = 'bd832622acc99b03e95f5648052a97cf';
    const units = 'metric';
    const lang = 'it';

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}&lang=${lang}`;
    console.log(endpoint);

    const response = await fetch(endpoint);
    const data = await response.json();

    const iconCode = data.weather[0].icon;
    const description = data.weather[0].description;

    weatherLocation.innerText = data.name;
    weatherIcon.alt = description;
    weatherIcon.src = `images/${iconCode}.png`;
    suggestion.innerText = getSuggestion(iconCode);
    weatherTemperature.innerText = Math.floor(data.main.temp) + "°C";
    //weatherTemperature.innerText = data.main.temp + "°C";

    htmlElement.className = '';
}

function getSuggestion(iconCode){
    return suggestions[iconCode];
}