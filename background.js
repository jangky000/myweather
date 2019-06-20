// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const geoData = {};
const weatherData = {};

// 앱 아이콘 뱃지 생성 (온도)
const getTemp = (temp) => {
  window.chrome.browserAction.setBadgeText({ text: temp });
  window.chrome.browserAction.setBadgeBackgroundColor({ color: '#FF6F61' });
};

// 앱 아이콘 이미지 생성 (날씨 상태)
const getState = (id) => {
  let state = 'sunny';
  if (id < 600) {
    state = 'rain';
  } else if (id > 800) {
    state = 'cloudy';
  } else if (id < 800) {
    state = 'partlycloudy';
  }

  window.chrome.browserAction.setIcon({
    path: {
      16: `images/${state}16.png`,
      19: `images/${state}19.png`,
      38: `images/${state}38.png`,
      48: `images/${state}48.png`,
      128: `images/${state}128.png`,
    },
  });

  // 팝업 이미지 및 텍스트 가져오기
  const divState = document.querySelector('.ico_state');
  const divStateText = document.querySelector('.info_state');

  if (divState !== null) {
    divState.style.backgroundImage = `url('/images/${state}128.png')`;
    divStateText.innerHTML = weatherData.stateText;
  }

  // 현재시간 가져오기
  if (divStateText !== null && (weatherData.hours < 6 || weatherData.hours >= 18)) {
    divStateText.style.color = '#fff';
    document.body.style.backgroundColor = '#000';
  }
};

const setWeather = () => {
  async function success(position) {
    geoData.lat = position.coords.latitude;
    geoData.lon = position.coords.longitude;
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&appid=83541a6ffb1bc21fa3f75f474dfbc7ae&units=metric`);
    const res = await data.json();
    console.log(res);

    weatherData.temp = Math.round(res.main.temp).toString();
    weatherData.state = res.weather[0].id;
    weatherData.stateText = res.weather[0].main;
    weatherData.hours = new Date().getHours();

    // weatherData.city = res.name;

    getTemp(weatherData.temp);
    getState(weatherData.state);
  }

  async function error() {
    alert('Unable to retrieve your location');
  }
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};
setWeather();
