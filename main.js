peter_pan_song = "";
harry_potter_song = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function setup(){
canvas = createCanvas(600, 530);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 530);
}

function preload(){
    peter_pan_song = loadSound("music2.mp3");
    harry_potter_song = loadSound("music.mp3");
}


function modelLoaded(){
    console.log("posenet is inizilized!!");
}

function gotPoses(results){
if(results.length > 0){
    console.log('results');

    leftwristx = results[0].pose.leftwrist.x;
    leftwristy = results[0].pose.leftwrist.y;
    console.log('leftwristx = '+leftwristx+'leftwristy = '+leftwristy);


    
    rightwristx = results[0].pose.rightwrist.x;
    rightwristy = results[0].pose.rightwrist.y;
    console.log('rightwristx = '+rightwristx+'rightwristy = '+rightwristy);
}
}