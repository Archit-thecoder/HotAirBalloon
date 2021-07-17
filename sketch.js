var balloon;
var position;
var balloonposition;
var database;
var BgImg , balloonImg

function preload(){
   BgImg = loadImage("cityImage.png") 
   balloonImg = loadImage("hotairballoon1.png")
}
function setup(){
    createCanvas(1000,800)
    database = firebase.database()
    balloon = createSprite(100,650,30,30)
    balloon.addImage(balloonImg)
    balloon.scale = 0.5
    balloonposition = database.ref("balloon/position")
    balloonposition.on("value",readPosition)
}

function draw(){
    background(BgImg)
    
    if(keyDown(RIGHT_ARROW)){
        writePosition(2,0)
    }
    if(keyDown(LEFT_ARROW)){
        writePosition(-2,0)
    }
    if(keyDown(UP_ARROW)){
        writePosition(0,-2)
    }
    if(keyDown(DOWN_ARROW)){
        writePosition(0,2)
    }
    drawSprites();

}
function readPosition(data){
    position = data.val()
    balloon.x = position.x
    balloon.y = position.y
}
function writePosition(x,y){
    database.ref("balloon/position").set({
        "x":position.x + x,
        "y":position.y + y
    })


}

/*function changePosition(x,y){
    ball.x = ball.x + x
    ball.y = ball.y + y
}
*/






