var movingRect;
var fixedRect;

function setup() {

  createCanvas(800,400);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect.shapeColor='red'
  fixedRect.shapeColor='red'
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&-movingRect.x+fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&-movingRect.y+fixedRect.y<movingRect.height/2+fixedRect.height/2){
      movingRect.shapeColor=rgb(122,122,0)
      fixedRect.shapeColor=rgb(0,122,122)
    }
    else {
      movingRect.shapeColor='red'
      fixedRect.shapeColor='red'
    }

  drawSprites();
}