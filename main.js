var noseX=0;
var noseY=0;
difference=0;
rightwristX=0;
leftwristY=0;
function draw(){
background("#036ffc");
fill("#45e6e0");
stroke("#f2fafa");
square(noseX,noseY,difference);
}
function preload(){

}
function setup(){
    canvas=createCanvas(350,350);
    canvas.position(650,150);
  video=createCapture(VIDEO);
  video.size(560,510);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses);
 }
 function modelLoaded(){
     console.log("poseNet is loaded");

 }
 function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX);
    console.log("noseY="+noseY);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
    console.log("leftwristX= "+leftwristX); 
    console.log("rightwristX= "+rightwristX);
    console.log ("difference= "+difference);
}

 }