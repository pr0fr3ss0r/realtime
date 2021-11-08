function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4Gv5oy_0O/model.json' , modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
    image(video, 0, 0, 350, 350);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}