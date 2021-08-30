function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(50, 120);

    canvas = createCanvas(550, 550);
    canvas.position(800, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#bad7db");
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}