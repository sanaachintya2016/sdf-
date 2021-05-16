var grid = 50;
var car,log,player;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{

 
}

function setup() {
  createCanvas(1366,700);



carGroup1 = new Group();
logGroup1 = new Group();

log = new Log()
logGroup1.add(log.spt)


}

function draw() {
  background("skyblue");
  for (var i= 0; i<6;i++){
  var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);

  if(i%2==0)
  {
    var road = createSprite(683,height-150-(i*400)-grassHeight,width,300)
    road.shapeColor="black";
  }
bottomGrass1.shapeColor="green"
  }
  for (var i = 0; i<40;i++){
    car = new Car(2)
    //car.spt.addAnimation("dfasjh",carAnimation)
   // car.spt.scale=0.05
    carGroup1.add(car.spt)
  }
  
  for(var i = 1; i<carGroup1;i++){
    if(carGroup1[i].x<0){
    carGroup1[i].x=width;
    
    }
  }
  
  for (var i = 0; i<40;i++){
    log = new Log(-2)
  
    logGroup1.add(log.spt)
  }
  for(var i = 1; i<logGroup1;i++){
    if(logGroup1[i].x<0){
    logGroup1[i].x=width;
    }
  }
//translate(0,-player.spt.y+height-150)
  keyPressed();
  drawSprites();
}
function keyPressed (){
  player = new Player(width/2,height-25)
if (keyCode == UP_ARROW){
  player.move(0,-2)
}else if (keyCode == DOWN_ARROW){
  player.move(0,2)
}else if (keyCode == LEFT_ARROW){
  player.move(-2,0)
}else if (keyCode == RIGHT_ARROW){
  player.move(2,0)
}
}