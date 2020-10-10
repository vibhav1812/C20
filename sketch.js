var movingRect, fixedRect;


function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 100, 100, 50);
  movingRect.shapeColor = "green";
  movingRect.velocityY = 5;
  fixedRect = createSprite(400, 800, 50, 100);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = -5;
}

function draw() {
  background("black");  
  
  
  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x- movingRect.x <= fixedRect.width/2+movingRect.width/2
    ){
        movingRect.velocityX = movingRect.velocityX *-1;
        fixedRect.velocityX = fixedRect.velocityX *-1;
  }

  if(movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y- movingRect.y <= fixedRect.height/2+movingRect.height/2 
    ){
        movingRect.velocityY = movingRect.velocityY *-1;
        fixedRect.velocityY = fixedRect.velocityY *-1;
  }


  console.log("X position difference = "+ movingRect.y-fixedRect.y)
  console.log("Sum of x half of their widths = "+movingRect.height/2+fixedRect.height/2)
  
  drawSprites();
}

