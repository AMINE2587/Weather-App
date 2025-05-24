let sun = document.getElementById("sun");
let moon = document.getElementById('moon');
let cloud = document.getElementById('cloud');
let storm = document.getElementById('storm');
let snow = document.getElementById('snow');
let rain = document.getElementById('rain');
let city = document.getElementById('shearch').value.trim();
let cant = document.getElementById('cant');
let whetherDisplay = document.getElementById('whether-display');
let btn = document.getElementById('btn');



function getData(){
    let city = document.getElementById('shearch').value.trim();

    if(!city){
        alert('please enter a city');
        return;
    }
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54910e8ed390a2bb4928d1bfbf1986b1&units=metric`).then((result) =>{
    let myData = result.json();
    return myData;
}).then((data) =>{
    if(data.cod !== 200){
        cant.style.display = "block";
        whetherDisplay.style.display = "none";
        return;
    }
    let temp = document.getElementById('temp');
    let description = document.getElementById('des');
    let humidity = document.getElementById('humidity');
    let wind = document.getElementById('wind');
    let weatherMain = data.weather[0].main;
    let des = data.weather[0].description;
    let tmp = data.main.temp;
    let hmd = data.main.humidity;
    let wd = data.wind.speed;
   
    if(weatherMain === "Clear"){
        whetherDisplay.style.display = "block";
        sun.style.display = "block";
        moon.style.display = "none";
        cloud.style.display = "none";
        storm.style.display = "none";
        snow.style.display = "none";
        rain.style.display = "none";
        description.innerHTML = des;
        temp.innerHTML = tmp;
        humidity.innerHTML = hmd;
        wind.innerHTML = wd;
    }else if (weatherMain === "Clouds"){
        whetherDisplay.style.display = "block";
        sun.style.display = "none";
        moon.style.display = "none";
        cloud.style.display = "block";
        storm.style.display = "none";
        snow.style.display = "none";
        rain.style.display = "none";
        description.innerHTML = des;
        temp.innerHTML = tmp;
        humidity.innerHTML = hmd;
        wind.innerHTML = wd;
    }else if(weatherMain === "Rain"){
        whetherDisplay.style.display = "block";
        sun.style.display = "none";
        moon.style.display = "none";
        cloud.style.display = "none";
        storm.style.display = "none";
        snow.style.display = "none";
        rain.style.display = "block";
        description.innerHTML = des;
        temp.innerHTML = tmp;
        humidity.innerHTML = hmd;
        wind.innerHTML = wd;
    }else if(weatherMain === "Snow"){
        whetherDisplay.style.display = "block";
        sun.style.display = "none";
        moon.style.display = "none";
        cloud.style.display = "none";
        storm.style.display = "none";
        snow.style.display = "block";
        rain.style.display = "none";
        description.innerHTML = des;
        temp.innerHTML = tmp;
        humidity.innerHTML = hmd;
        wind.innerHTML = wd;
    }else if(weatherMain === "Thunderstorm"){
        whetherDisplay.style.display = "block";
        sun.style.display = "none";
        moon.style.display = "none";
        cloud.style.display = "none";
        storm.style.display = "block";
        snow.style.display = "none";
        rain.style.display = "none";
        description.innerHTML = des;
        temp.innerHTML = tmp;
        humidity.innerHTML = hmd;
        wind.innerHTML = wd;
    }else{
      cant.style.display = "block";
      whetherDisplay.style.display = "none";
    } 
});
};

btn.addEventListener('click', getData);