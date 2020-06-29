const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;  
var engine, world;
var ground1,ground2;
var polygon,band;


function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450,390,900,20);
  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
  block1 = new Block(300,275,30,40);
console.log(block1);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);
//level two
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);
//level three
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);
//top
block16 = new Block(390,155,30,40);

//set 2 for second stand
//level one
blocks1 = new Block(640,175,30,40);
blocks2 = new Block(670,175,30,40);
blocks3 = new Block(700,175,30,40);
blocks4 = new Block(730,175,30,40);
blocks5 = new Block(760,175,30,40);
//level two
blocks6 = new Block(670,135,30,40);
blocks7 = new Block(700,135,30,40);
blocks8 = new Block(730,135,30,40);
//top
blocks9 = new Block(700,95,30,40);
  ball = new Polygon(100,100,50,50)
  band= new Band(ball.body,{x:100, y:50});
}



function draw() {
  
  background("blue");  
  Engine.update(engine)
   fill("orange")
   ground.display()
   fill("indigo")
   stand1.display()
   stand2.display()
   fill("darkblue")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("crimson");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("silver");
  block13.display();
  block14.display();
  block15.display();
  fill("brown");
  block16.display();
  fill("olives");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("purple");
  blocks6.display();
  blocks7.display();
  blocks8.display()
  fill("green")
  blocks9.display()
  fill("orange")
   ball.display()

 band.display()
 fill("coral")
 textSize(20)

 text("Drag the pentagon to hit the box",200,30)

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
band.fly();
}
function keyPressed(){
  if(keyCode === 32){
     band.attach(ball.body)
  }
}

