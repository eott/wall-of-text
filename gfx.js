imagesByName = {};

function loadImage(name) {
	var img = new Image();
	img.src = name + ".png";
	return img;
}

function loadImages() {
	imagesByName["ground"] = loadImage("ground");
	imagesByName["sky"] = loadImage("sky");
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

function drawGUI() {
	// Background
	ctx.drawImage(imagesByName["ground"], 0 - posX % 800, 500, 800, 100);
	ctx.drawImage(imagesByName["ground"], 800 - posX % 800, 500, 800, 100);
	ctx.drawImage(imagesByName["sky"], 0, 0, 800, 500);
	
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
	ctx.fillText(hits, 700, 500);
	ctx.fillText(misses, 700, 540);
	ctx.fillText(speed, 700, 580);*/
	
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
