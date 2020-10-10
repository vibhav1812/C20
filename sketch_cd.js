var movingRect, fixedRect;


function setup() {
  createCanvas(1200,400);
  movingRect = createSprite(400, 200, 100, 50);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(300, 200, 50, 100);
  fixedRect.shapeColor = "green";
}

function draw() {
  background("black");  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x- movingRect.x <= fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y- movingRect.y <= fixedRect.height/2+movingRect.height/2 ){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  console.log("X position difference = "+ movingRect.y-fixedRect.y)
  console.log("Sum of x half of their widths = "+movingRect.height/2+fixedRect.height/2)
  
  drawSprites();
}