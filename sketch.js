const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var thunder1, thunder2, thunder3, thunder4;
var rand;
var thunderCreatedFrame = 0;
var drops=[];

function preload(){
thunder1 = loadImage("1.png")
thunder2 = loadImage("2.png")
thunder3 = loadImage("3.png")
thunder4 = loadImage("4.png")

}

function setup(){
var canvas = createCanvas(1000, 850); 
engine = Engine.create();
world = engine.world;

umbrella = new Umbrella(250, 550);

for(var i = 0; i < 100; i++){
drops.push(new Drop(random(0, 1000),random(0, 850)))
}
 }

function draw(){
background(0);
Engine.update(engine)

for(var i = 0; i < drops.length; i++){
drops[i].display();
drops[i].updateDrops();
}

umbrella.display();

spawnThunder();
drawSprites();
}   

function spawnThunder(){
if(frameCount%45===0){
var thunder = createSprite(random(50, 450), 100, 100, 100);
rand = Math.round(random(1, 4))
switch(rand){
case 1: thunder.addImage(thunder1);
break;
case 2: thunder.addImage(thunder2);
break;
case 3: thunder.addImage(thunder3);
break;
case 4: thunder.addImage(thunder4);
default: break;
}
thunder.scale = random(0.3, 0.6);
thunder.lifetime = 10;
}
}