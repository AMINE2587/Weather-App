let sun = document.getElementById("sun");
let moon = document.getElementById('moon');
let cloud = document.getElementById('cloud');
let storm = document.getElementById('storm');
let snow = document.getElementById('snow');
let rain = document.getElementById('rain');
let cant = document.getElementById('cant');
let whetherDisplay = document.getElementById('whether-display');
let btn = document.getElementById('btn');

function getData(){
    let city = document.getElementById('shearch').value.trim();

    if(!city) {
        alert('enter the city')
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54910e8ed390a2bb4928d1bfbf1986b1&units=metric`)
    .then((result) => result.json())
    .then((data) => {
        if(data.cod && data.cod != 200){
            cant.style.display = "block";
            whetherDisplay.style.display = "none";
            return;
        }

        cant.style.display = "none";
        whetherDisplay.style.display = "block";

        let temp = document.getElementById('temp');
        let description = document.getElementById('des');
        let humidity = document.getElementById('humidity');
        let wind = document.getElementById('wind');

        let weatherMain = data.weather[0].main;
        let des = data.weather[0].description;
        let tmp = data.main.temp;
        let hmd = data.main.humidity;
        let wd = data.wind.speed;

        
        sun.style.display = "none";
        moon.style.display = "none";
        cloud.style.display = "none";
        storm.style.display = "none";
        snow.style.display = "none";
        rain.style.display = "none";

        if(weatherMain === "Clear"){
            sun.style.display = "block";
        } else if(weatherMain === "Clouds"){
            cloud.style.display = "block";
        } else if(weatherMain === "Rain"){
            rain.style.display = "block";
        } else if(weatherMain === "Snow"){
            snow.style.display = "block";
        } else if(weatherMain === "Thunderstorm"){
            storm.style.display = "block";
        }

        description.innerHTML = des;
        temp.innerHTML = `${tmp}`;
        humidity.innerHTML = `${hmd}`;
        wind.innerHTML = `${wd}`;

    }).catch((error) => {
        cant.style.display = "block";
        whetherDisplay.style.display = "none";
        console.error("Error fetching data:", error);
    });
}

btn.addEventListener('click', getData);
