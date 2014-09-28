var nameAudioMap = {};

function loadSounds() {
	nameAudioMap["miss"] = new Audio("miss.mp3");
	nameAudioMap["miss"].volume = 0.3;
	nameAudioMap["background"] = new Audio("background.mp3");
	nameAudioMap["background"].volume = 0.5;
}

function playSound(name) {
	if (nameAudioMap[name]) {
		nameAudioMap[name].play();
	}
}

function playOrResetSound(name) {
	if (nameAudioMap[name]) {
		nameAudioMap[name].play();
		nameAudioMap[name].currentTime = 0;
	}
}

function playAndLoopSound(name) {
	if (nameAudioMap[name]) {
		nameAudioMap[name].currentTime = 0;
		nameAudioMap[name].loop = true;
		nameAudioMap[name].play();
	}
}

function stopSound(name) {
	if (nameAudioMap[name] && !initState) {
		nameAudioMap[name].pause();
		nameAudioMap[name].currentTime = 0;
	}
}

function muteSound() {
	muted = !muted;
	
	if (!muted) {
		nameAudioMap["miss"].volume = 0.3;
		nameAudioMap["background"].volume = 0.5;
		document.getElementById("mute").style.display = "inline-block";
		document.getElementById("unmute").style.display = "none";
	} else {
		nameAudioMap["miss"].volume = 0;
		nameAudioMap["background"].volume = 0;
		document.getElementById("mute").style.display = "none";
		document.getElementById("unmute").style.display = "inline-block";
	}
}