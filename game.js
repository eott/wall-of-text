// Display and meta globals
var can = document.getElementById("screen");
var ctx = can.getContext("2d");
var keepPlaying = true;
var isIntro = true;
var introFlags = [false, false, false];
var mainLoop = false;
var fc = 0;
var screenShakeCounter = 0;
var difficulty = 1;

// Player, enemies and environment
var wallPosX = -400;
var wallPosY = 0;

// Input and typing
var currentPhrase = phrases[0];
var currentOffset = 0;
var uppercase = 0;
var hits = 0;
var misses = 0;
var frameOfLastHit = 0;

// Movement
var speed = 0;
var posX = 0;
var posY = 0;

// Other
var PI = Math.PI
var PI2 = PI / 2;
var PI32 = 3 * PI / 2;

// Loading and stuff that only needs to be done once
ctx.font = "35px PT Mono";
ctx.fillText("LOADING", 325, 285);
registerListeners();
loadSounds();
loadImages();
// Draw images once to force loading them, then reset the canvas
for (var property in imagesByName) {
    if (imagesByName.hasOwnProperty(property)) {
        ctx.drawImage(imagesByName[property], 0, 0, 1, 1);
    }
}
ctx.clearRect(0, 0, can.width, can.height);

function initGame(event) {
	keepPlaying = true;
	fc = 0;
	resetMovement();
	
	mainLoop = window.setInterval("upkeep()", 30);
}

function upkeep() {
	fc++;
	
	// Intro
	if (isIntro) {
		drawIntro();
		if (fc > 450) {
			isIntro = false;
			fc = 0;
		}
		return;
	}
	
	ctx.clearRect(0, 0, can.width, can.height);
	
	// Game
	doPlayerMovement();
	doWallMovement();
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