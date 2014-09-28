function doPlayerMovement() {
	var dx = speed;
	var dy = 0;
	
	posX += dx;
	posY += dy;
}

function doWallMovement() {
	var wallSpeed = 0;
	var distance = posX - wallPosX;
	var minSpeed = 3 + 1.5 * difficulty;
	
	if (distance > 1000) {
		wallSpeed = speed * (1 + 0.1 * difficulty);
	} else if (distance > 600) {
		wallSpeed = speed;
	} else {
		wallSpeed = minSpeed;
	}
	
	// Grace period
	if (fc < 180) {
		wallSpeed = speed * 0.7;
	}
	
	wallPosX += wallSpeed;
}

function resetMovement() {
	posX = 0;
	posY = 0;
	wallPosX = -400;
	wallPosY = 0;
	speed = 0;
	wallSpeed = 0;
}