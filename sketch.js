/*
//string data type
var name = "Isaac";
console.log(name);

//number data type
var num = 78;
console.log(num);

//boolean data type
var bool = false;
console.log(bool);

//undefined data type
var x;
console.log(x);

//reassigning the same undefined var x to null
//null data type
x = null;
console.log(x);

//array - for holding multiple values at once
var y = [23,34,56.7,89];
console.log(y);

var z = [78, "mango", "hello", true, 78.9];
console.log(z);

//length of array - number of elements inside an array
console.log(z.length);

//accessing the elements of an array
console.log(z[0]);
console.log(z[2]);

//array inside an array
var b = [89, 67, "kite", "wow", false, "no",[1,2,3,4,5]]
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[6]);
console.log(b[6][2]);
console.log(b[6][4]);

//push new values into an array
b.push("isaac");
console.log(b);
console.log(b.length);
b.push("aishwarya","apple",78);
console.log(b);
console.log(b.length);

var n = []; //empty array
console.log(n);

var p = [23,34,56];
console.log(p);

n.push(p)
console.log(n);

//pop out of last value from array
b.pop();
console.log(b);

*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gamestate = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gamestate !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
  
}


function mouseReleased(){
    slingshot.fly();
    gamestate = "launched"
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}