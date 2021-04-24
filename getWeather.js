// API Key
const APIKEY = "";

const fetchCity = async (city) => {
    // City endpoint
    const cityURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKEY}&q=${city}`;

    const response = await fetch(cityURL);
    const data = await response.json();
    return data[0];
}

const fetchWeather = async (key) => {
    // Weather endpoint
    const weatherURL = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKEY}`;

    const response = await fetch(weatherURL);
    const data = await response.json();
    return data;
}
