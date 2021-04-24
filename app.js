// form reference
const form = document.querySelector("form");
const card = document.querySelector(".card");

const updateWeather = async (city) => {
    const cityKey = await fetchCity(city);
    const cityWeather = await fetchWeather(cityKey.Key);
    return {cityWeather, cityKey};
}

const updateUI = (data) => {
    // UI Weather variables
    const icon = data.cityWeather[0].WeatherIcon;
    const condition = data.cityWeather[0].WeatherText;
    const temp = data.cityWeather[0].Temperature.Metric.Value;
    const cityName = data.cityKey.EnglishName;
    
    // determine if it is daytime
    const isDayTime = data.cityWeather[0].IsDayTime;

    // inject html template into card class
    card.innerHTML = `
        <div class="card-image">
            <img src=${isDayTime ? "./img/day.jpg" : "./img/night.jpg"} alt="">
        </div>
        <div class="card-icon">
            <img src="./img/icons/${icon}.svg" alt="" />
        </div>
        <div class="card-text">
            <h2 class="city">${cityName}</h2>
            <small class="condition">${condition}</small>
            <h1 class="temp">${temp}°C</h1>
        </div>
    `

    // remove hide class (display none) from card when data is fetched
    card.classList.remove("hide");

    console.log(data.cityWeather, data.cityKey);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let cityName = form.search.value.trim();
    form.reset();

    updateWeather(cityName)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
})