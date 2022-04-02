function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5H_NxDhIf/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

function gotResults(){
  console.log('gotResult')
}