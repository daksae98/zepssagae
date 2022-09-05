/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import "zep-script";

ScriptApp.displayRatio = 2;
ScriptApp.cameraEffect = 2;
// ScriptApp.onInit.Add(() => {

// });

ScriptApp.onJoinPlayer.Add(function (player) {
  player.showCenterLabel("낭떠러지에 떨어지지 않게 주의하세요!");

  player.tag = {
    widget: null,
  };

  player.moveSpeed = 120;
  player.sendUpdated();

  // player.tag.widget = player.showWidget("quiz.html", "top", 1024, 788);
  // player.tag.widget.onMessage.Add(function (player, msg) {
  //   if (msg.type == "close") {
  //     player.showCenterLabel("위젯이 닫혔습니다.");
  //     player.tag.widget.destroy();
  //     player.tag.widget = null;
  //   }
  // });
});

// ScriptApp.addOnLocationTouched("imgroot", (player) => {
//   if (player.tag.widget !== null) return;

//   player.tag = {
//     widget: null,
//   };

//   player.tag.widget = player.showWidget("quiz.html", "top", 1024, 788);
//   player.tag.widget.onMessage.Add(function (player, msg) {
//     if (msg.type == "close") {
//       player.showCenterLabel("게임이 종료되었습니다.");
//       player.tag.widget.destroy();
//       player.tag.widget = null;
//     }
//   });
// });

// ScriptApp.addOnTileTouched(10, 40,);

ScriptApp.addOnLocationTouched("IceBear", (player) => {
  if (player.tag.widget !== null) return;
  player.tag = {
    widget: null,
  };

  player.tag.widget = player.showWidget("fourquiz.html", "top", 1024, 788);

  player.tag.widget.onMessage.Add(function (player, msg) {
    if (msg.type == "close") {
      player.showCenterLabel("게임이 종료되었습니다.");
      player.tag.widget.destroy();
      player.tag.widget = null;
    }
  });
});

// ScriptApp.showCenterLabel("Hello World");

// let zepLogo = ScriptApp.loadSpritesheet("zep_logo.png");

// ScriptMap.putObject(0, 0, zepLogo, { overlap: true });

// let blueman = ScriptApp.loadSpritesheet(
//   "blueman.png",
//   48,
//   64,
//   {
//     left: [5, 6, 7, 8, 9], // 좌방향 이동 이미지
//     up: [15, 16, 17, 18, 19],
//     down: [0, 1, 2, 3, 4],
//     right: [10, 11, 12, 13, 14],
//     dance: [
//       20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
//     ],
//     down_jump: [38],
//     left_jump: [39],
//     right_jump: [40],
//     up_jump: [41],
//   },
//   8
// );

// let _widget = null;
// // q 키를 누르면 동작하는 함수
// // App.addOnKeyDown 설명(링크)
// ScriptApp.addOnKeyDown(81, function (player) {
//   _widget = player.showWidget("sample.html", "top", 400, 700);
//   ScriptApp.sayToAll(`위젯 아이디: ${_widget.id}`);
// });

// ScriptApp.onJoinPlayer.Add(function (player) {
//   player.sprite = blueman;
//   player.sendUpdated();
// });

// ScriptApp.addOnLocationTouched("tree", function (player) {
//   player.hidden;
// });

// ScriptMap.putObject(2, 3, "ASDf", {});

// ScriptApp.onDestroy.Add(function () {
//   ScriptMap.clearAllObjects();
// });

// ScriptApp.showWidget()
