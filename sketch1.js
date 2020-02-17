var frec,mrec;
function setup() {
  createCanvas(1200,800);
 frec=createSprite(400,100,50,70);
 frec.shapeColor="pink";
frec.debug=true;
 mrec=createSprite(400,800,50,70);
 mrec.shapeColor="blue";
 mrec.debug=true;
 mrec.velocityY=-5;
 frec.velocityY=5;
}
function draw(){
background("black");
if (frec.x-mrec.x<mrec.width/2+frec.width/2
    && mrec.x-frec.x<mrec.width/2+frec.width/2){
mrec.velocityX=mrec.velocityX*(-1);
frec.velocityX=frec.velocityX*(-1);        

    }
if (  mrec.y-frec.y<mrec.height/2+frec.height/2
    && frec.y-mrec.y<mrec.height/2+frec.height ){ 
        mrec.velocityY=mrec.velocityY*(-1);
        frec.velocityY=frec.velocityY*(-1);    
    }
    drawSprites();
}