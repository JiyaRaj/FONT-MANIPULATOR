last_result="";
function setup() {
  canvas = createCanvas(300, 280);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classify=ml5.imageClassifier("MobileNet", model_loaded);
  speak=window.speechSynthesis;
}

function draw(){
  image(video, 0, 0, 300, 280);
classify.classify(video, got_results);
}

function model_loaded(){
  console.log("model ready");
}

function got_results(error, results){
if (error){
  console.log(error);
}
else{
  console.log(results);
  object_name=results[0].label;
  confient=results[0].confidence.toFixed(2);
  if(confient>0.7 && last_result!=object_name){
    document.getElementById("accuracy").innerHTML= confient;
    document.getElementById("object").innerHTML= object_name;
    var speak_this="Object found is " + object_name;
    speech_object=new SpeechSynthesisUtterance(speak_this);
    speak.speak(speech_object);
    last_result=object_name;
  }
  
}
}



