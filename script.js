var test = new Audio("/Sons/The_Wind_Waker_-_03_-_Legendary_Hero.mp3");
let music = true;
function pause() {
	if (music === true) {
		test.play();
		music = false;
	} else {
		test.pause();
		test.currentTime = 0;
		music = true;
	}
}
function JouerSon() {
	let sound = document.getElementById("rubis");
	sound.play();
}
function JouerSon2() {
	let sound2 = document.getElementById("rubis2");
	sound2.play();
}
function JouerSon3() {
	let sound3 = document.getElementById("link-attack");
	sound3.play();
}
function JouerSon4() {
	let sound4 = document.getElementById("surprise");
	sound4.play();
}