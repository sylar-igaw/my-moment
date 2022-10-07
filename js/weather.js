const API_KEY = '1f2f188328b298b7c1aac0e5d344b4f6'
const hour = new Date().getHours();
const WEATHER_KEY = 'weather'
const WEATHER_TIME_KEY = 'weather_time'
let isLocal = false

//1시간마다 weather조회하기 만듦
let weather = localStorage.getItem(WEATHER_KEY)
let weatherTime = localStorage.getItem(WEATHER_TIME_KEY)
if( weatherTime == null)
{
    weatherTime = Date.now()
}
else {
    const nowTime = Date.now()
    // console.log('nowTime - weatherTime' , nowTime - weatherTime)
    if( nowTime - weatherTime  <= (1000 * 60 * 60))
        isLocal = true
}
if( isLocal ){
    console.log("localstorage Weather")
    weather = JSON.parse(weather)
    paintWeather(weather)
}
else 
{
    const geo = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
}
function paintWeather(data)
{
    console.log(data);
    const weatherSpan = document.querySelector("#weather span:first-child")
    const citySpan = document.querySelector("#weather span:last-child")
    citySpan.innerText = data.name
    weatherSpan.innerText = `${data.weather[0].main} / 현재 온도: ${data.main.temp}°C /Feel : ${data.main.feels_like}°C `
}
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    fetch(url).then(response => response.json()).then(data => {
        console.log("Fetch Weather")
        localStorage.setItem(WEATHER_KEY, JSON.stringify(data))
        localStorage.setItem(WEATHER_TIME_KEY, Date.now())
        paintWeather(data)
    })
    

}
function onGeoError(){
    console.log('GeoError');
}
