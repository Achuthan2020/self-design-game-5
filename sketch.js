var mainPlayer,mainPlayerFallingImg,oppnPlayer1FallingImg,oppnPlayer2FallingImg,oppnPlayer3FallingImg,oppnPlayer1,obstacle1,obstacle2,obstacle3,oppnPlayer2,oppnPlayer3,track,mainPlayerImg,oppnPlayer1Img,oppnPlayer2Img,oppnPlayer3Img,bellSound,trackImg,obstacle1Img,obstacle2Img,obstacle3Img;

function preload(){
    mainPlayerImg=loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
    mainPlayerFallingImg=loadAnimation("images/mainPlayer3.png");
    oppnPlayer1FallingImg=loadAnimation("images/opponent3.png");
    oppnPlayer2FallingImg=loadAnimation("images/opponent6.png");
    oppnPlayer3FallingImg=loadAnimation("images/opponent9.png")
    oppnPlayer1Img=loadAnimation("images/opponent1.png","images/opponent2.png");
    oppnPlayer2Img=loadAnimation("images/opponent4.png","images/opponent5.png");
    oppnPlayer3Img=loadAnimation("images/opponent7.png","images/opponent8.png");
    bellSound=loadSound("sound/bell.mp3");
    obstacle1Img=loadImage("images/obstacle1.png");
    obstacle2Img=loadImage("images/obstacle2.png");
    obstacle3Img=loadImage("images/obstacle3.png");
    trackImg=loadImage("images/Road.png");
}

function setup(){
    var canvas=createCanvas(1200,300)
    track=createSprite(100,150)
    track.addImage(trackImg)
    track.velocityX=-3
    mainPlayer=createSprite(50,30);
    mainPlayer.addAnimation("mainPlayerImg",mainPlayerImg)
    mainPlayer.scale=0.1
    
    
   
}
function draw(){
    if(track.x<0){
        track.x=track.width/2
    }
    if(keyDown("up")){
        mainPlayer.velocityY=-2
    }
    if(keyDown("down")){
        mainPlayer.velocityY=2
    }
    if(keyDown("right")){
        mainPlayer.velocityX=2
    }
    
    obstacles();
    var selectOppnPlayer=Math.round(random(1,3));
    if(World.frameCount%150===0){
        if(selectOppnPlayer===1){
            OppnPlayer1();
        }
        
        else if(selectOppnPlayer===2){
            OppnPlayer2();
        }
        else{
            
                OppnPlayer3();
            
        }
    }
    drawSprites()
}
function obstacles(){

    if(World.frameCount%80===0){
        obstacle1=createSprite(1200,random(0,300))
        var r=Math.round(random(1,3))
        switch(r){
            case 1:obstacle1.addImage(obstacle1Img)
            break;
            case 2:obstacle1.addImage(obstacle2Img)
            break;
            case 3:obstacle1.addImage(obstacle3Img)
            break;
            default:break;
        }
        
        obstacle1.scale=0.1 
        obstacle1.velocityX=-2 
    }
   
}
function OppnPlayer1(){
    if(World.frameCount%80===0){
        oppnPlayer1=createSprite(1100,random(0,300))
        oppnPlayer1.addAnimation("oppn",oppnPlayer1Img)
        oppnPlayer1.scale=0.1
        oppnPlayer1.velocityX=-2
    }      
}
function OppnPlayer2(){
    if(World.frameCount%80===0){
        oppnPlayer2=createSprite(1100,random(0,300))
        oppnPlayer2.addAnimation("nopp",oppnPlayer2Img)
        oppnPlayer2.scale=0.1
        oppnPlayer2.velocityX=-2
    }      
}
function OppnPlayer3(){
    if(World.frameCount%80===0){
        oppnPlayer3=createSprite(1100,random(0,300))
        oppnPlayer3.addAnimation("ppon",oppnPlayer3Img)
        oppnPlayer3.scale=0.1
        oppnPlayer3.velocityX=-2
    }      
}