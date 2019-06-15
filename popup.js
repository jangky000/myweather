// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// 온도 생성
const infoTemp = document.querySelector('.info_temperature');
infoTemp.innerHTML = `${data.temp}℃`;

// 날씨 상태 생성
const infoState = document.querySelector('.ico_weather');
infoState.style.backgroundImage = `url(/images/${data.state}128.png)`;
