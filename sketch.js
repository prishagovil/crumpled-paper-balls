var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;
	ground = Bodies.rectangle(0, 600, width * 2, 1, { isStatic: true });
	World.add(world, ground);

    

	leftground= new Ground (400,550,20,120)
	rightground= new Ground (550,550,20,120)


	//Create the Bodies Here.
ball=Matter.Bodies.circle (100,100,30,ball_options)
World.add (world,ball)
//make on left
	Engine.run(engine);
  rectMode (CENTER)
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill ("green")
  drawSprites();
 
  rect(ground.position.x, ground.position.y, width * 2, 20);
  ellipseMode(RADIUS) 
  ellipse (ball.position.x,ball.position.y,30,30)
  leftground.show()
  rightground.show()
}
function keyPressed () {
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce (ball,{x:ball.position.x,y:ball.position.y},{x:10,y:-85})
	}

}


