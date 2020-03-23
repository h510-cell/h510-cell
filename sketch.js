var canvas;
var votersCount;
var allvoters;
var database;
var position;
var form,voters;

function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
}

function draw(){
    if (votersCount===4){
        game.update(1);
    }


    background("white");
    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        Text("Are E-books important for students"
        -"Yes"
        -"No"
        )
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        Text("Are History,Civics and Geography needed in future life"
        -"Yes"
        -"No"
        )
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        Text("Are tutions necessary for students of 5th and 6th class"
        -"Yes"
        -"No"
        )
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        Text("Thank you for participating in our survey")
        writePosition(0,+1);
    }
    drawSprites();
}
}