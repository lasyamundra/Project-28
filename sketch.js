
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImage;

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(200,625,10,10);
	boy.addImage(boyImage);
	boy.scale=0.1;
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,695,800,20);

	tree = new Tree(600,500);

	stone = new Stone(150,575,60,60);

	mango1 = new Mango(500,450,50,50);
	mango2 = new Mango(700,450,50,50);
	mango3 = new Mango(600,400,50,50);
	mango4 = new Mango(630,475,50,50);
	mango5 = new Mango(550,425,50,50);
	mango6 = new Mango(525,480,50,50);
	mango7 = new Mango(675,375,50,50);
	mango8 = new Mango(625,390,50,50);
	mango9 = new Mango(575,340,50,50);
	mango10 = new Mango(625,360,50,50);

	chain = new Chain(stone.body,{x:150,y:575});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  drawSprites();

  ground.display();
  tree.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display(); 

  chain.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}
function mouseReleased() {
    chain.fly();
}

function detectCollision(lstone,lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:225,y:420});
    chain.attach(stone.body);    
  }
}



