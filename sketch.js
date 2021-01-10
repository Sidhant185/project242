
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	box1 = new box(1100,780,10,200);
	box2 = new box(730,780,10,200);
  ground1 = new ground(650,790,1300,10);
  box4 = new box(200,750,50,50);
  box3 = new box(920,780,400,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ground1.display();
  drawSprites();
 
}
function keypressed(){
    if (keyCode === UP_ARROW){
        Body.applyforce(box4,box4.position,{x:80,y:50});
    }
}


