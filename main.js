function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    clasifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YcmheSAe1/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}