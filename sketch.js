const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground
var lGround
var rGround
var tGround

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground=new Ground(200,390,400,20)
}

function draw() 
{
  background(51);
  Engine.update(engine);
ground.show()

}

