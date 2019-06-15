// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// 앱 아이콘 뱃지 생성 (온도)
window.chrome.browserAction.setBadgeText({ text: data.temp });
window.chrome.browserAction.setBadgeBackgroundColor({ color: 'powderblue' });


// 앱 아이콘 이미지 생성 (날씨 상태)
const iconChanged = (weather) => {
  window.chrome.browserAction.setIcon({
    path: {
      16: `images/${weather}16.png`,
      19: `images/${weather}19.png`,
      38: `images/${weather}38.png`,
      48: `images/${weather}48.png`,
      128: `images/${weather}128.png`,
    },
  });
};
iconChanged(data.state);
