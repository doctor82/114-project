function preload(){

}
function setup(){
canvas=createCanvas(450,350);
canvas.center();
video=createCapture(VIDEO);
video.size(450,350);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('poseNet is initialised');

}
function draw(){
image(video,0,0,450,350);
}
function take_snapshot(){
save('Myclownimage.png');
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
console.log("Nose x = "+results[0].pose.nose.x-30);
console.log("Nose y= "+results[0].pose.nose.y);
}
}