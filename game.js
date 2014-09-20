// Display and meta globals
var can = document.getElementById("screen");
var ctx = can.getContext("2d");
var keepPlaying = true;
var mainLoop = false;
var fc = 0;

// Player, enemies and environment
var mobs = [];
var screenShakeCounter = 0;

// Input and typing
var currentPhrase = phrases[0];
var currentOffset = 0;
var uppercase = 0;
var hits = 0;
var misses = 0;
var frameOfLastHit = 0;

// Movement
var speed = 0;
var startX = 0;
var startY = 0;
var posX = 0;
var posY = 0;

// Other
var PI = Math.PI
var PI2 = PI / 2;
var PI32 = 3 * PI / 2;

// Stuff that only needs to be done once
registerListeners();
loadSounds();
loadImages();

function initGame(event) {
	keepPlaying = true;
	fc = 0;
	resetMovement();
	
	mainLoop = window.setInterval("upkeep()", 30);
}

function upkeep() {
	fc++;
	ctx.clearRect(0, 0, can.width, can.height);
	
	doMovement();
	drawMobs();
	drawGUI();
	
	speed -= (speed * 0.04) + 0.01;
	speed = Math.max(speed, 0);
	
	if (!keepPlaying) {
		window.clearInterval(mainLoop);
	}
}

function hitCorrectKey() {
	hits++;
	var frameDiff = fc - frameOfLastHit;
	speed += Math.max(30 - frameDiff, 0) * 0.1;
	frameOfLastHit = fc;
}

function hitWrongKey() {
	misses++;
	speed -= 0.1;
	playOrResetSound("miss");
	screenShake();
}

initGame();