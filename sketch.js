var database;
var gameState =0;
var playerCount = 0;
var allPlayers;


var player, form,game;
var player1,player2;
var players;
var viruses;
var fruitGroup;
var virus1_img, virus2_img, virus3_img,virus4_img, virus5_img;
var player_img;
var Player1 = 0;
var Player2 = 0;


function preload(){
  player_img = loadImage("images/human.jpeg");
  virus1_img = loadImage("images/virus.jpeg");
  virus2_img = loadImage("images/virus.jpeg");
  virus3_img = loadImage("images/virus.jpeg");
  virus4_img = loadImage("images/virus.jpeg");
  virus5_img = loadImage("images/virus.jpeg");
 
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  virusGroup = new Group();
  playerGroup = new Group();
}

function draw() {
  background(0);


   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}