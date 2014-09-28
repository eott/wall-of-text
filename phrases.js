phrases = [
	"Never forget I am not this silver body, Mahrai. I am not an animal brain, I am not even some attempt to produce an AI through software running on a computer. I am a Culture Mind. We are close to gods, and on the far side. We are quicker, we live faster and more completely than you do, with so many more senses, such a greater store of memories and at such a fine level of detail.",
	"Not implemented yet."
];

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