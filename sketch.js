var mr,fr

function setup() {
  createCanvas(800,1000);
  fr=createSprite(400, 100, 40, 100);
  mr=createSprite(400,500,80,30)
  mr.shapeColor="green"
  fr.shapeColor="green"
  mr.velocityY=-5
  fr.velocityY=5
}

function draw() {
  background(0);  
  //mr.x=mouseX
  //mr.y=mouseY

  console.log(mr.x-fr.x)

  
  
  bounce(mr,fr)
  if(isTouching(mr,fr)){
    mr.shapeColor="red"
    fr.shapeColor="red"
   
  }
  else{
    mr.shapeColor="green"
    fr.shapeColor="green"
  
  }
  drawSprites();
}

