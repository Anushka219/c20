var frec,mrec;
function setup() {
  createCanvas(800,400);
 frec=createSprite(200,200,50,70);
 frec.shapeColor="pink";
frec.debug=true;
 mrec=createSprite(100,100,50,70);
 mrec.shapeColor="blue";
 mrec.debug=true;
}

function draw() {
  background(255,255,255);
  mrec.x=World.mouseX;
  mrec.y=World.mouseY;
  
  console.log(mrec.x-frec.x);
if (mrec.x-frec.x<mrec.width/2+frec.width/2
  && frec.x-mrec.x<mrec.width/2+frec.width/2
  && frec.y-mrec.y<mrec.height/2+frec.height/2
  && mrec.y-frec.y<mrec.height/2+frec.height ){
  mrec.shapeColor="red";
  frec.shapeColor="red";
}
else{
  frec.shapeColor="pink";
  mrec.shapeColor="blue";  
}
  drawSprites();
}