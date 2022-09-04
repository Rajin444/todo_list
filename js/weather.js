//https://openweathermap.org/api 사용
//user의 위치(geolocation)를 줘서 날씨를 보여준다.
//이 스크립트를 부르면 브라우저에서 위치 좌표를 주며 wifi,위치,GPS 모두 사용
const API_KEY = "54ec5839036603a7ddccb50cb70ae27b";

function onGeoOk(position){
    const lat = position.coords.latitude;   //위도
    const lng = position.coords.longitude;   //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //fetch의 결과는 network에서 확인할 수 있다.
    fetch(url)
        .then(response => response.json()
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            //${data.weather[0].main} : 지역, ${data.main.temp}:섭씨
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        }));
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

//객체를 유일한 매개변수로 받는 콜백함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

