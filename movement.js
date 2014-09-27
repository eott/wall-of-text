function doPlayerMovement() {
	var dx = speed;
	var dy = 0;
	
	posX += dx;
	posY += dy;
}

function doWallMovement() {
	var wallSpeed = 0;
	var distance = posX - wallPosX;
	
	if (distance > 800) {
		wallSpeed = speed * 1.05;
		wallSpeed = speed * 1.05;
	} else {
		wallSpeed = Math.max(speed, 0.5 * difficulty);
	}

	wallPosX += wallSpeed;
}

function resetMovement() {
	posX = 0;
	posY = 0;
}