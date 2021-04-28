var bg,gardenImage;
var cat,catImage,catRunning,catFinal;
var mouse,mouseImage,mousetease,mouseFinal;
function preload() {
    //load the images here
    gardenImage = loadImage("garden.png");
    catImage=loadImage("cat1.png");
    mouseImage=loadImage("mouse1.png");
    catRunning=loadAnimation("cat2.png","cat3.png");
    mousetease=loadAnimation("mouse2.png","mouse3.png");
    catFinal=loadImage("cat4.png");
    mouseFinal=loadImage("mouse4.png");


}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    bg=createSprite(400,400);
    bg.addImage(gardenImage);
    
    cat = createSprite(600, 600);
    cat.addAnimation("catsleeping", catImage);
    cat.scale = 0.2;
    cat.addAnimation("catmoving",catRunning);
    cat.addAnimation("catCollided", catFinal);
    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImage);
    mouse.scale = 0.15;
    mouse.addAnimation("mouseteasing",mousetease);
    mouse.addAnimation("mouseCollided",mouseFinal);
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) { 
        cat.velocityX=0; 
        cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("catCollided",catFinal);
        mouse.changeAnimation("mouseCollided",mouseFinal);
    }  
    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.changeAnimation("catmoving",catRunning);
    mouse.changeAnimation("mouseteasing",mousetease);
    }
   
}
