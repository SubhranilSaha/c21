
var fixedRect, movingRect;
var gameObject1, gameObject2;
var object3

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  object3 = createSprite (300, 300, 30, 30)
  object3.shapeColor = "green"
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if (isTouching(movingRect,object3)){
    movingRect.shapeColor = "blue";
    object3.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    object3.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




