function registerListeners() {
	window.addEventListener("keydown", function(event) {
		pressedKey = event.keyCode;
		if (pressedKey == 16) {
			uppercase = 32;
		} else {
			if (currentOffset >= currentPhrase.length - 1) {
				endLevel();
			}
			
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