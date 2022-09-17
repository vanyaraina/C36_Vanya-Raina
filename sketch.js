var Ball, database;
var position;


function setup(){

  createCanvas(500,500);

  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";

    database = firebase.database()
    //console.log(database)

    var Ballposition = database.ref("Ball/Position")
    Ballposition.on("value", redposition)
    console.log(Ballposition)

}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function redposition(data){
  position = data.val()
  console.log(position)
  Ball.x = position.x
  Ball.y = position.y

}

function writePosition(x,y){
  database.ref("Ball/Position").set({
    x:position.x+x, 
    y:position.y+y
  })
}