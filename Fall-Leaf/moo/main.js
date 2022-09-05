// The END GAME

App.cameraEffect = 1;
App.cameraEffectParam1 = 500;
App.displayRatio = 2;

const handleOnJoinPlayer = (player) => {
  player.showCenterLabel(`Challenge Hard Winter`);
  player.moveSpeed = 200;
  player.sendUpdated();
};

App.onJoinPlayer.Add(handleOnJoinPlayer);

// ------------ leaf Game ------------ //
// const handleOnJoinPlayer = (player) => {
//   player.showCenterLabel(`Winter is coming`);
//   player.tag = {
//     widget: null,
//   };
// };

// App.onJoinPlayer.Add(handleOnJoinPlayer);

// function handleLeaf(x, y, state) {
//   App.addOnTileTouched(x, y, function (player) {
//     if (player.tag.widget !== null) {
//       player.tag.widget.sendMessage({
//         text: state,
//       });
//     }
//   });
// }

// App.addOnLocationTouched("basket", (player) => {
//   if (player.tag.widget !== null) return;

//   player.tag.widget = player.showWidget("widget.html", "middleleft", 300, 450);

//   player.tag.widget.onMessage.Add(function (player, msg) {
//     if (msg.type === "close") {
//       player.tag.widget.destroy();
//       player.tag.widget = null;
//     }
//   });

//   handleLeaf(117, 57, "Swimming");
//   handleLeaf(119, 61, "왜냐하면");
//   handleLeaf(119, 64, "Passes");
//   handleLeaf(122, 67, "Because");
//   handleLeaf(119, 71, "헤엄치기");
//   handleLeaf(120, 75, "티켓,패스");
// });
