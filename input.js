function registerListeners() {
	window.addEventListener("keydown", function(event) {
		pressedKey = event.keyCode;
		if (pressedKey == 16) {
			uppercase = 32;
		} else {
			// Reached end of phrase
			if (currentOffset >= currentPhrase.length - 1) {
				endLevel();
			}
			
			// Is input blocked?
			if (!inputIsActive) {
				return;
			}
			
			// Check if correct key and advance
			var middle = currentPhrase.substring(currentOffset, currentOffset + 1);
			if (middle.charCodeAt(0) == keyMapping[pressedKey] - uppercase) {
				hitCorrectKey();
			} else {
				hitWrongKey();
			}
			
			currentOffset++;
		}
	}, false);
	
	window.addEventListener("keyup", function(event) {
		if (event.keyCode == 16) {
			uppercase = 0;
		}
	}, false);
}