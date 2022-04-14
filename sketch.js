var boy,boyimg
var background, backgroundimg
var obstacle1, obstacle2, obstacle3, obstaclea,obstacleb,obstaclec;

function preload(){
boyimg = loadAnimation("mainPlayer1.png","mainPlayer2.png")
backgroundimg=loadImage("Road.png")
obstaclea = loadImage("obstacle1.png")
obstacleb = loadImage("obstacle2.png")
obstaclec = loadImage("obstacle3.png")
}

function setup() {
createCanvas (600,200)

back=createSprite(300,100,600,200)
back.addImage(backgroundimg)
back.velocityX=-3
back.scale=0.3
boy=createSprite(50,100)
boy.addAnimation("boyRunning",boyimg)
boy.scale=0.06


obstacle3=createSprite(494,30)
obstacle3.addImage(obstaclec)
obstacle3.scale=0.1

if()

}

function draw() {
 background("gray")
 boy.y=mouseY
 fill("white")
 console.log(mouseX+" "+mouseY)
 if(back.x<0){
     back.x=width/2
 }
 spawnObstacles()
 drawSprites()
}

function spawnObstacles(){
    if(frameCount%100===0){
        obstacle1=createSprite(261,41)
        obstacle1.addImage(obstaclea)
        obstacle1.scale=0.1
        obstacle2=createSprite(416,169)
        obstacle2.addImage(obstacleb)
        obstacle2.scale=0.1
        obstacle1.velocityX=-3
        obstacle2.velocityX=-3
    }
}