var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var allPlayers;
var distance = 0;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(0);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
  drawSprites();
}
