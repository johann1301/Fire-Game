const home = new Home();
const map = new Map ();
const fire = new Fire ();
const fire2 = new Fire2 ();
const gun = new Gun ();
const score = new Score();










function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  ambient.loop();
  sounds = true;
  map.burn.setVolume(0.1);
  ambient.setVolume(0.1);
  
}
 
 
function preload(){


	ambient = loadSound ('sounds/fireSong.mp3');
	this.music = loadImage('images/Music.png')
    home.preload();
    map.preload();
	fire.preload();
	fire2.preload();
	gun.preload();
	score.preload();
	
}

function draw() {

	home.draw();

	if (home.site !== 3 && home.site !== 2){
    map.draw();
    gun.draw();
    score.draw();
	home.site = 1;
    }

	image(this.music, 250, 20, 220, 60)

	
  
}



function keyPressed() {


	//Player 1
	if (keyCode === 39) {
		// move the player to the right
		map.moveRight();
	}
	if (keyCode === 37) {
		// move the player to the left
		map.moveLeft();
	}
	if (keyCode === 38) {
		// move the player up
		map.moveUp();
	}
	if (keyCode === 40) {
		// move the player down
		map.moveDown();
	}
	if (keyCode === 188 ){
		map.addBomb();
		map.explosion()
		
	}



	//Player 2
	if (keyCode === 68) {
		// move the player to the right
		map.moveRight2();
	}
	if (keyCode === 65) {
		// move the player to the left
		map.moveLeft2();
	}
	if (keyCode === 87) {
		// move the player up
		map.moveUp2();
	}
	if (keyCode === 83) {
		// move the player down
		map.moveDown2();
	}
	if (keyCode === 226 ){
		map.addBomb2();
		map.explosion2();
		
	}


	// Sites

	if(keyCode === 13){
		home.site = 1
	}

	if(keyCode === 77){
		if (ambient.isPlaying()) {
			ambient.pause()
		} else if (!ambient.isPlaying()) {
			ambient.loop()
		}
		
	}

	if (keyCode === 82){
		window.location.reload();
	 
	}
	
} 


