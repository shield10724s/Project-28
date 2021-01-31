const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground
var boy,boyImg;
var tree;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var launcher;
var stone,stoneSprite,stoneImg;
var band;

function preload()
{
	boyImg = loadImage('Images/boy.png');
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,400,50,100);
	boy.addImage(boyImg);
	boy.scale=0.08;


	//Create the Bodies Here.
	ground = new Ground(500,450,1000,10);
	tree = new Tree(750,250,310,410);

	m1 = new Mango(800,150,30);
	m2 = new Mango(750,120,30);
	m3 = new Mango(720,150,30);
	m4 = new Mango(850,150,30);
	m5 = new Mango(800,190,30);
	m6 = new Mango(870,190,30);
	m7 = new Mango(610,190,30);
	m8 = new Mango(650,200,30);
	m9 = new Mango(690,200,30);
	m10 = new Mango(730,200,30);

	stone = new Stone(160,355,20);
	band = new Elastic(stone.body,{x:160, y:355});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');

  ground.display();
  stone.display();
  band.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();


  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  detectCollision(stone,m6);
  detectCollision(stone,m7);
  detectCollision(stone,m8);
  detectCollision(stone,m9);
  detectCollision(stone,m10);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    band.fly();
}

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 235 , y: 420});
        band.attach(stone.body);
    }
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
		if(distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango,false);
		}
}