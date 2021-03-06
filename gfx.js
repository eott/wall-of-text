imagesByName = {};

function loadImage(name) {
	var img = new Image();
	img.src = name + ".png";
	return img;
}

function loadImages() {
	imagesByName["ground"] = loadImage("ground");
	imagesByName["sky"] = loadImage("sky");
	imagesByName["walk"] = loadImage("walk");
	imagesByName["run"] = loadImage("run");
	imagesByName["stand"] = loadImage("stand");
	imagesByName["wall"] = loadImage("wall");
	imagesByName["help"] = loadImage("help");
}

function circle(x, y, radius, color, width, fill) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
	ctx.lineWidth = width;
	ctx.strokeStyle = color;
	if (fill) {
		ctx.fill();
	} else {
		ctx.stroke();
	}
}

function screenShake() {
	if (screenShakeCounter == 0) {
		screenShakeCounter = 4;
	}
}

function drawIntro() {
	if (!introFlags[0]) {
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, 800, 600);
		
		ctx.font = "100px PT Mono";
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("WALL OF TEXT", 40, 100);
		
		ctx.font = "20px PT Mono";
		for (var i = 0; i < 13; i++) {
			ctx.fillText(getIntroTextByLine(i), 40, 150 + 25 * i);
		}
		
		introFlags[0] = true;
	}
	
	if (!introFlags[1] && fc > 150) {
		ctx.font = "60px PT Mono";
		ctx.fillText("ENOUGH OF THIS!", 120, 540);
		introFlags[1] = true;
	}
	
	if (!introFlags[2] && fc > 210) {
		ctx.clearRect(0, 0, can.width, can.height);
		ctx.drawImage(imagesByName["help"], 0, 0, 800, 600);
		introFlags[2] = true;
	}
}

function drawEndScreen() {
	if (!endScreenFlags[0]) {
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, 800, 600);
		
		ctx.font = "100px PT Mono";
		ctx.fillStyle = "#FFFFFF";
		if (wonLevel) {
			ctx.fillText("You won!", 150, 150);
		} else {
			ctx.fillText("You lost!", 120, 150);
		}
		
		ctx.font = "60px PT Mono";
		ctx.fillText("Get ready for", 150, 300);
		if (wonLevel) {
			ctx.fillText("next level", 210, 390);
		} else {
			ctx.fillText("retry", 290, 390);
		}
	
		endScreenFlags[0] = true;
	}
}

function drawCounter() {
	ctx.font = "100px PT Mono";
	ctx.fillStyle = "#0000FF";
	c = Math.ceil((90 - fc) / 30);
	ctx.fillText(c, 385, 150);
}

function draw() {
	// Background
	ctx.drawImage(imagesByName["ground"], 0 - posX % 800, 500, 800, 100);
	ctx.drawImage(imagesByName["ground"], 800 - posX % 800, 500, 800, 100);
	ctx.drawImage(imagesByName["sky"], 0 - Math.floor((posX % 3200) / 4), 0, 800, 500);
	ctx.drawImage(imagesByName["sky"], 800 - Math.floor((posX % 3200) / 4), 0, 800, 500);
	
	// Player
	if (speed < 0.4) {
		ctx.drawImage(imagesByName["stand"], 336, 372, 128, 128);
	} else if (speed < 8.5) {
		ctx.drawImage(imagesByName["walk"], 64 * Math.floor((fc % 16) / 2), 0, 64, 64, 336, 372, 128, 128);
	} else if (speed < 15) {
		ctx.drawImage(imagesByName["run"], 64 * Math.floor((fc % 16) / 2), 0, 64, 64, 336, 372, 128, 128);
	} else {
		ctx.drawImage(imagesByName["run"], 64 * (fc % 8), 0, 64, 64, 336, 372, 128, 128);
	}
	
	// Wall
	ctx.drawImage(imagesByName["wall"], wallPosX - posX +  400, 100, 150, 400);
	
	// Typing stuff
	ctx.font = "35px PT Mono";
	var left = currentPhrase.substring(0, currentOffset);
	var middle = currentPhrase.substring(currentOffset, currentOffset + 1);
	var right = currentPhrase.substring(currentOffset + 1, currentPhrase.length);
	ctx.fillText(left, 400 - currentOffset * 21, 50);
	ctx.fillStyle = '#FF0000';
	ctx.fillText(middle, 400, 50);
	if (middle == " ") {
		ctx.fillRect(400, 50, 20, 5);
	}
	ctx.fillStyle = '#000000';
	ctx.fillText(right, 421, 50);
	
	/* Debug elements
	ctx.font = "20px PT Mono";
	ctx.fillText(hits, 700, 200);
	ctx.fillText(misses, 700, 240);
	ctx.fillText(speed, 700, 280);
	ctx.fillText(posX, 700, 320);
	ctx.fillText(wallPosX, 700, 360);*/
	
	// Screen shake
	var screen = document.getElementById('screen');
	if (screenShakeCounter > 0) {
		screen.style.top = (Math.random() * 0.5 + 50) + "%";
		screen.style.left = (Math.random() * 0.5 + 50) + "%";
		screenShakeCounter--;
	} else {
		screen.style.top = "50%";
		screen.style.left = "50%"
	}
}
