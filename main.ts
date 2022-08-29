/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import "zep-script";

ScriptApp.showCenterLabel("Hello World");

let zepLogo = ScriptApp.loadSpritesheet("zep_logo.png");

ScriptMap.putObject(0, 0, zepLogo, { overlap: true });

let blueman = ScriptApp.loadSpritesheet(
  "zep_logo.png",
  48,
  64,
  {
    left: [5, 6, 7, 8, 9], // 좌방향 이동 이미지
    up: [15, 16, 17, 18, 19],
    down: [0, 1, 2, 3, 4],
    right: [10, 11, 12, 13, 14],
    dance: [
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
    ],
    down_jump: [38],
    left_jump: [39],
    right_jump: [40],
    up_jump: [41],
  },
  8
);

ScriptApp.onJoinPlayer.Add(function (player) {
  player.sprite = blueman;
  player.sendUpdated();
});

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});
