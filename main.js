function star()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/W4ePtHhth/model.json",modelLoaded);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    
}