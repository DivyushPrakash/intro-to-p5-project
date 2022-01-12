function preload() {


}

function setup() {
    var canvas = createCanvas(750, 600);
    var webcam1 = createCapture(VIDEO);
    webcam1.hide();
}

function draw() {

    circle(300, 90, 20);
    ellipse(200, 500, 55, 55);
    rect(30, 20, 80, 55);
}

function take_snapshot() {
    save('YoUr PhOtO.png');
}