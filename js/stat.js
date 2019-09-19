'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_X = 30;
var GAP_Y = 40;
var TEXT_WIDTH = 50;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var gistogramColor = function (ctx, name) {
  if (name === 'Вы') {
    ctx.fillStyle = rgba(255, 0, 0, 1);
  } else {
    ctx.fillStyle = rgba(0, 0, 255, ' + Math.random() + ');
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16pt PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_X, CLOUD_Y + GAP_X);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_X, CLOUD_Y + GAP_Y + GAP);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP_Y + (GAP_Y + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP_X);
    ctx.fillRect(CLOUD_X + GAP_Y + (GAP_Y + TEXT_WIDTH) * i, 150 + GAP_Y + GAP_X - (150 * times[i] / maxTime), 40, 150 * times[i] / maxTime);
    gistogramColor(players[i]);
  }
};


