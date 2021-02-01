const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var database, gameState = 0;
var form, player;
var tezt
function preLoad() {
    loadFont('assets/inconsolata.otf');

}
function setup() {

    engine = Engine.create();
    world = engine.world;
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw() {
    background(250);
    Engine.update(engine);


}