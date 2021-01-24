const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground
var boy,boyImg;
var tree,ts,tImg;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10, mangoImg;
var ms1,ms2,ms3,ms4,ms5,ms5,ms7,ms8,ms9,ms10;
var launcher;
var stone,stoneSprite,stoneImg;
var band;

function preload()
{
	boyImg = loadImage('Plucking mangoes/boy.png');
	tImg = loadImage('Plucking mangoes/tree.png');
	mangoImg = loadImage('Plucking mangoes/mango.png');
	stoneImg = loadImage('Plucking mangoes/stone.png');
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,400,50,100);
	boy.addImage(boyImg);
	boy.scale=0.08;

	ts = createSprite(750,260,100,300);
	ts.addImage(tImg);
	ts.scale=0.33;
	ts.depth=-1;

	ms1 = createSprite(100, 200,20,20);
	ms1.addImage(mangoImg);
	ms1.scale=0.08;

	ms2 = createSprite(100, 200,20,20);
	ms2.addImage(mangoImg);
	ms2.scale=0.08;

	ms3 = createSprite(100, 200,20,20);
	ms3.addImage(mangoImg);
	ms3.scale=0.08;

	ms4 = createSprite(100, 200,20,20);
	ms4.addImage(mangoImg);
	ms4.scale=0.08;

	ms5 = createSprite(100, 200,20,20);
	ms5.addImage(mangoImg);
	ms5.scale=0.08;

	ms6 = createSprite(100, 200,20,20);
	ms6.addImage(mangoImg);
	ms6.scale=0.08;

	ms7 = createSprite(100, 200,20,20);
	ms7.addImage(mangoImg);
	ms7.scale=0.08;

	ms8 = createSprite(100, 200,20,20);
	ms8.addImage(mangoImg);
	ms8.scale=0.08;

	ms9 = createSprite(100, 200,20,20);
	ms9.addImage(mangoImg);
	ms9.scale=0.08;

	ms10 = createSprite(100, 200,20,20);
	ms10.addImage(mangoImg);
	ms10.scale=0.08;

	

	stoneSprite = createSprite(0,0,10,10);
	stoneSprite.addImage(stoneImg);
	stoneSprite.scale=0.06;

	//Create the Bodies Here.
	ground = new Ground(500,450,1000,10);
	tree = new Tree(800,300,100,300);

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

  ms1.x = m1.body.position.x;
  ms1.y = m1.body.position.y;

  ms2.x = m2.body.position.x;
  ms2.y = m2.body.position.y;

  ms3.x = m3.body.position.x;
  ms3.y = m3.body.position.y;

  ms4.x = m4.body.position.x;
  ms4.y = m4.body.position.y;

  ms5.x = m5.body.position.x;
  ms5.y = m5.body.position.y;

  ms6.x = m6.body.position.x;
  ms6.y = m6.body.position.y;

  ms7.x = m7.body.position.x;
  ms7.y = m7.body.position.y;
  
  ms8.x = m8.body.position.x;
  ms8.y = m8.body.position.y;

  ms9.x = m9.body.position.x;
  ms9.y = m9.body.position.y;

  ms10.x = m10.body.position.x;
  ms10.y = m10.body.position.y;

  stoneSprite.x = stone.body.position.x;
  stoneSprite.y = stone.body.position.y;

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

  ground.display();
  stone.display();
  band.display();

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
        band.attach(stone);
    }
}

function detectCollision(lstone,lmango){
	mbp = lmango.body.position;
	sbp = lstone.body.position;

	var distance = dist(sbp.x, sbp.y, mbp.x, mbp.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango,false);
	}
}