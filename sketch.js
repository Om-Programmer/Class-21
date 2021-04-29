var fixedR , movingR ;

function setup() {
  createCanvas(1200,800);
  fixedR = createSprite(400,100,70,70);
  fixedR.shapeColor="blue"
  fixedR.velocityY = 5;
  fixedR.debug = true;
  movingR = createSprite(400,800,70,70);
  movingR.shapeColor="blue"
  movingR.velocityY = -5;
  movingR.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor="blue"

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor="blue"

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor="blue"

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor="blue"
}

function draw() {
  background("lightblue");
 //movingR.x = World.mouseX;
  //movingR.y = World.mouseY;

  bounceOff(fixedR , movingR)

  drawSprites();
}


