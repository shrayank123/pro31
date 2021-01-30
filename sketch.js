const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function preload(){
 
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine  = Engine.create();
  world = engine.world;
 
  for(var j = 40; k<= width; k = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
  
}
function draw() {
 // background(backgroundImg);  
 background("lightblue")
  Engine.update(engine);
  if(frameCount % 60 === 0){
    particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }
  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }


//rows.display();
 ground.display();

  drawSprites();
}

  

