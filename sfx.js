var nameAudioMap = {};

function loadSounds() {
	nameAudioMap["miss"] = new Audio("miss.mp3");
	nameAudioMap["miss"].volume = 0.3;
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

function stopSound(name) {
	if (nameAudioMap[name] && !initState) {
		nameAudioMap[name].pause();
		nameAudioMap[name].currentTime = 0;
	}
}