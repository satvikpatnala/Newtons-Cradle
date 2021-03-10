
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new ROOF(400,100,300,10);
bobObject1 = new BOB(160,300,10);
rope1 = new rope (bobObject1.body,roof.body,-40,0)
bobObject2 = new BOB(320,300,10);
rope2 = new rope (bobObject2.body,roof.body,-20,0)
bobObject3 = new BOB(480,300,10);
rope3 = new rope(bobObject3.body,roof.body,0,0)
bobObject4 = new BOB(640,300,10);
rope4 = new rope (bobObject4.body,roof.body,20,0)
bobObject5 = new BOB(800,300,10);
rope5 = new rope (bobObject5.body,roof.body,40,0)
World.add(roof,rope1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  }
}



