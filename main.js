noseX = 0;
noseY = 0;

function preload() {
    nose = loadImage("https://i.postimg.cc/nrPmK2Zn/pixlr-bg-result-1.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPoses);
}

function modelloaded() {
    console.log("PoseNet is initialized.")
}

function draw() {
    image(video, 0,0,300,300);

    image(nose, noseX-20, noseY+5, 35, 35);
}

function snap() {
    save("lipstick_filter.png");
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("The X-position of the nose is " + results[0].pose.nose.x);
        console.log("The Y-position of the nose is " + results[0].pose.nose.y);
    }
}