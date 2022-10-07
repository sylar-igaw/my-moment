const API_KEY = '1f2f188328b298b7c1aac0e5d344b4f6'
function onGeoOk(position){
    console.log('GeoOk');
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`${lat} ${lon}`)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`

        console.log(data)
        console.log(data.name, data.weather)
    });
}
function onGeoError(potato){
    console.log('GeoError');
    console.log(potato);
}
const geo = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)