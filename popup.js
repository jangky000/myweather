// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const getCity = () => {
  const newDiv = document.createElement('div');
  const newContent = document.createTextNode(weatherData.city);
  const divBackground = document.querySelector('.background');

  newDiv.appendChild(newContent);
  divBackground.appendChild(newDiv);
};
setTimeout(() => {
  getWeather();
  getCity(weatherData.city);  
}, 2000);
