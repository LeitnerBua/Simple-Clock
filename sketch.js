let clock;

function setup() {
	createCanvas(800, 800);

	clock = new Clock();

	angleMode(DEGREES);
}

function draw() {

	background(0);

	clock.show();



}
