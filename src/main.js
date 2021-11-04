



const home = new Home();
const map = new Map ();
const fire = new Fire ();
const fire2 = new Fire2 ();
const gun = new Gun ();
const score = new Score();
let sounds = true;









function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
//   ambient.loop();
  sounds = true
  map.burn.setVolume(0.1)
}
 
 
function preload(){


	ambient = loadSound ('sounds/background.mp3');
    home.preload();
    map.preload();
	fire.preload();
	fire2.preload();
	gun.preload();
	score.preload();
	
}

function draw() {
	console.log(sounds)

	home.draw();

	if (home.site !== 3 && home.site !== 2){
    map.draw();
    gun.draw();
    score.draw();
	home.site = 1;
    }

	if (home.sounds === false){
		map.burn.stop();
		ambient.stop();
		fire.life.stop();
		fire2.life.stop();
		gun.life.stop();
		
	}
  
}

function sound(){
  
    
	// if (sounds === true){
		ambient.pause();
	// 	sounds = false;
	// } else {
	// 	sounds = true;
	// }

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
	
		if (sounds === true){
			ambient.pause()
			sounds = false;
		}
		if(sounds === false){
			ambient.loop()
			sounds = true;
		}
		
	}
	
} 





