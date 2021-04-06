var bgImg
var cat,mouse

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catimg1 = loadImage("images/cat1.png");
    mouseimg1 = loadImage("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catimg3 = loadAnimation("images/cat3.png","images/cat4.png");
    mouseimg3 = loadAnimation("images/mouse3.png","images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    bgSprite=createSprite(500,400);
	bgSprite.addImage("ground",bg)

    cat=createSprite(800, 650, 20,20);
	cat.addImage("cat",catimg1)
	cat.scale=0.2
  
    mouse=createSprite(600, 650, 10,10);
	mouse.addImage("mouse",mouseimg1)
	mouse.scale=0.2



}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    //if(cat.x - mouse.x <(cat.width - mouse.width)/2)
   // {
        //write code here to change animation
   // }

    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("cat2",catimg2);
   
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
   mouse.addAnimation("mouseTrasing",mouseimg2);
   mouse.changeAnimation("mouseTrasing",mouseimg3);
   mouse.framedelay =25;
  }
   if(keyCode === LEFT_ARROW){
    cat.addAnimation("catTrasing",catimg2);
    cat.changeAnimation("catTrasing",catimg3);
    cat.framedelay =25;


    }
}
