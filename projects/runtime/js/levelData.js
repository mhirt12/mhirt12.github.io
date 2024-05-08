var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data

    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY -25},
          { type: "sawblade", x: 600, y: groundY -120},
          { type: "sawblade", x: 900, y: groundY -31},
          { type: "reward", "x": 1902, "y": groundY - 60},
          { type: "reward", "x": 1780, "y": groundY - 60},
          { type: "reward", "x": 1150, "y": groundY - 60},

          {type: "enemy", x: 1500, y: groundY -59},
          {type: "enemy", x:1105, y: groundY -53},
          {type: "enemy", x:1320, y: groundY -70},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY -30},
          { type: "sawblade", x: 600, y: groundY -31},
          { type: "sawblade", x: 900, y: groundY -30},
          { type: "reward", "x": 2000, "y": groundY - 60},
          { type: "reward", "x": 2000, "y": groundY - 60},
          {type: "enemy", x: 1481, y: groundY -55},
          {type: "enemy", x:1100, y: groundY -51},
          {type: "enemy", x:1809, y: groundY -50},


        ],
      },
      {
        name: "Mordor",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 600, y: groundY},
          { type: "sawblade", x: 900, y: groundY},

          {type: "enemy", x: 1106, y: groundY -115},
          {type: "enemy", x:2000, y: groundY-51},
          {type: "enemy", x:1699, y: groundY -15},
          {type: "enemy", x:1440, y: groundY -54},

          { type: "reward", "x": 2000, "y": groundY - 60},
          { type: "reward", "x": 2000, "y": groundY - 60},
          { type: "reward", "x": 2000, "y": groundY - 60},





        ]
      }
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
