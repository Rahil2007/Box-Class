//namespacing- aliasing - aka
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var box1;
var box2;
var ground;

function setup() {
  createCanvas(800,800);

  //create an engine
  engine = Engine.create();
  world = engine.world;

  //restitution - bounciness - 0-1 
  

  // creating a box from the class
  box1 = new Box(300,100,40,90);

  box2 = new Box(310,10,40,30);

  ground= new Ground(400,380,800,40)


  //run the engine
  Engine.run(engine);
  
}

function draw() {
  background(200);  
  rectMode(CENTER);

  box1.display();
  box2.display();
  ground.display();
 
}