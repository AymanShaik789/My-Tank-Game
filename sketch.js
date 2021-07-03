var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var xVal = 0;
var yVal = 0
var form, player, game;

var Tanks, Tank1, Tank2;
var Tank1_img, Tank2_img,Tank1_Up_img, Tank1_Down_img, Tank1_left_img;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7, wall8, wall9, wall10;

function preload(){
  Tank1_img = loadImage("images/Tank 1right.png");
  Tank2_img = loadImage("images/Tank 2.png");

}

function setup(){
  canvas = createCanvas(1200,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}



function draw(){
  background("white");
  if(playerCount === 2){
   game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

}
