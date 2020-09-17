
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, ground1, wall1,wall2, wall3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  paper1 = new Paper(100,400,20);
  ground1 = new Ground(400,500,1600,10);
  wall1= new Wall(545,460,20,75);
  wall2= new Wall(615,490,120,20);
  wall3= new Wall(685,460,20,75);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  paper1.display();
  ground1.display();
  wall1.display();
  wall2.display();
  wall3.display();
  keyPressed();
  drawSprites();
 
}



