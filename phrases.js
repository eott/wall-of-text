phrases = [
	"They made a mad attempt at following us in the fractured canoe, but, finding it useless, again vented their rage in a series of hideous vociferations, and rushed up into the hills.",
	"We calculated, therefore, upon being yet pursued, as soon as our enemies could get round to the bay, distant about three miles, where the boats were usually laid up. Fearing this, we made every exertion to leave the island behind us, and went rapidly through the water, forcing the prisoner to take a paddle.",
	"We now found ourselves in the wide and desolate Antarctic Ocean, in a latitude exceeding eighty-four degrees, in a frail canoe, and with no provision but the three turtles. The long polar winter, too, could not be considered as far distant, and it became necessary that we should deliberate well upon the course to be pursued.",
	"We also set up two paddle-blades for masts, placing them opposite each other, one by each gunwale, thus saving the necessity of a yard. To these masts we attached a sail made of our shirts-doing this with some difficulty, as here we could get no assistance from our prisoner whatever, although he bad been willing enough to labor in all the other operations. The sight of the linen seemed to affect him in a very singular manner. He could not be prevailed upon to touch it or go near it, shuddering when we attempted to force him, and shrieking out, Tekeli-li."
];

function getPhrase(nr) {
	if (phrases[nr]) {
		return phrases[nr];
	} else {
		words = [
			"can", "do", "it", "help", "trapped", "free", "us",
			"you", "chosen", "one", "believe", "forever",
			"prophecy", "gods", "escape", "must", "please", "hero",
			"are", "the", "here", "made"
		];
		phrase = words[Math.floor(Math.random() * words.length)];
		for (var i = 0; i < 50; i++) {
			phrase = phrase + " " + words[Math.floor(Math.random() * words.length)];
		}
		return phrase;
	}
}

introText = [
	"Remembering back, I can't quite put my mind to when it star-",
	"ted, because honestly it's hard to remember so far back, un-",
	"less you are gifted with such a thing and it does not really",
	"matter anyway, but nonetheless I can say that it started ex-",
	"actly at the right time, because had it started any time so-",
	"oner, then I wouldn't have been able to experience something",
	"like that probably for my entire life, which is really tell-",
	"in something about the extraordinarity of that event and its",
	"likeliness of happening to any one of us, but then again you",
	"can think of many things that fit this description, that you",
	"can safely ignore for lack of importance to our overall life",
	"and thus we must really examine closely why this event enab-",
	"led us to look upon the world with new eyes gained by chance"
];

function getIntroTextByLine(nr) {
	if (nr <= 13) {
		return introText[nr];
	} else {
		return "";
	}
}