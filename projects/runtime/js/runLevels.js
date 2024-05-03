var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createSawBlade(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);

      var obstacleImage = draw.bitmap("img/sawblade.png");
      obstacleImage.x = -hitZoneSize;
      obstacleImage.y = -hitZoneSize;
      sawBladeHitZone.addChild(obstacleImage);
    }

    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);

      enemy.x = x;
      enemy.y = y;
      enemy.velocityX = -2;
      enemy.rotationalVelocity = -5;

      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
      };

      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      };

      game.addGameItem(enemy);
    }

    function createReward(x, y) {
      var reward = game.createGameItem("reward", 10);
      var goldCoin = draw.circle(10, "yellow", "yellow", 2);
      goldCoin.x = 0;
      goldCoin.y = 0;
      reward.addChild(goldCoin);

      reward.x = x;
      reward.y = y;
      reward.velocityX = -2;

      reward.onPlayerCollision = function () {
        game.increaseScore(100);
        reward.fadeOut();
      };

      reward.onProjectileCollision = function () {
        reward.fadeOut();
      };

      game.addGameItem(reward);
    }

    function createMarker(x, y) {
      var marker = game.createGameItem("marker", 25);
      var purpleSquare = draw.rect(50, 50, "purple");
      purpleSquare.x = -25;
      purpleSquare.y = -25;
      marker.addChild(purpleSquare);

      marker.x = x;
      marker.y = y;
      marker.velocityX = -2;

      marker.onPlayerCollision = function () {
        startLevel();
        marker.shrink();
      }

      marker.onProjectileCollision = function () {
        startLevel();
        marker.shrink();
      }

      game.addGameItem(marker);
    }


    function startLevel() {
      // TODO 13 goes below here

      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;

      for (var i = 0; i < levelObjects.length; i++) {
        var gameItem = levelObjects[i];
        var gameItemX = gameItem.x;
        var gameItemY = gameItem.y;
        var gameItemType = gameItem.type;

        if (gameItemType == "sawblade") {
          createSawBlade(gameItemX, gameItemY);
        } if (gameItemType == "enemy") {
          createEnemy(gameItemX, gameItemY);
        } if (gameItemType == "reward") {
          createReward(gameItemX, gameItemY);
        }

        createMarker(2000, groundY - 50);
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
