leftWrist=0;
rightWrist=0;
diff=0;
function setup(){
video=createCapture(VIDEO);
canvas=createCanvas(550,450);
canvas.position(700,70);
video.size(550,450);
poseNet=ml5.poseNet(video, modelReady);
poseNet.on("pose", gotResults );
}

function draw(){
    background("lightblue");
    fill("purple");
    stroke("white")
text("Hello",250,250);
textSize(diff);


}

function modelReady(){
    console.log("Model is loaded");
}

function gotResults(results){
if (results.length>0){
    leftWrist=results[0].pose.leftWrist.x;
    rightWrist=results[0].pose.rightWrist.x;
    diff=leftWrist-rightWrist;
}
}