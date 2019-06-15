// 도시 기반으로 날씨 api 적용 => 위치 기반으로 변경할 예정
// const apiURI = (lat, lon) => `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=83541a6ffb1bc21fa3f75f474dfbc7ae&units=metric`;

const httpGet = (url) => {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', url, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
};

const curURL = 'http://api.openweathermap.org/data/2.5/weather?lat=37&lon=127&appid=83541a6ffb1bc21fa3f75f474dfbc7ae&units=metric';

// let curURL;
// function geoFindMe() {
//   function success(position) {
//     const latitude  = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     curURL = apiURI( position.coords.latitude, position.coords.longitude );
//   }

//   function error() {
//     alert('Unable to retrieve your location');
//   }

//   if (!navigator.geolocation) {
//     alert('Geolocation is not supported by your browser');
//   } else {
//     navigator.geolocation.getCurrentPosition(success, error);
//   }
// }
// geoFindMe();

const getState = (weatherId) => {
  if (weatherId < 600) {
    return 'rain';
  } if (weatherId > 800) {
    return 'cloudy';
  } if (weatherId < 800) {
    return 'partlycloudy';
  }
  return 'sunny';
};

const data = {
  temp: Math.round(JSON.parse(httpGet(curURL)).main.temp).toString(),
  state: getState(JSON.parse(httpGet(curURL)).weather[0].id),
};
