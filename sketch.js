var database;
var gameState = 0;
var playerCount = 0;
var game, player, form;
var allPlayers;
var car1, car2, car3, car4;
var car1Image, car2Image, car3Image, car4Image, groundImage, trackImage;
var cars;
var distance;

function preload(){
    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");
    groundImage = loadImage("images/ground.png");
    trackImage = loadImage("images/track.jpg");
}
function setup(){
    database = firebase.database();
    createCanvas(displayWidth - 20, displayHeight - 30);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.updateState(1);
    } 
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}