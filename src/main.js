




const map = new Map ();
const fire = new Fire ();
const fire2 = new Fire2 ();
const gun = new Gun ();
const score = new Score();
let site = 0;








function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  
}

 
function preload(){

	this.home = loadImage('../images/home.png')
	this.winPlayer2 = loadImage('../images/win-player2.png')
	this.winPlayer1 = loadImage('../images/win-player1.png')
	this.homeButton = loadImage('../images/Homebutton.png')
	this.restartButton = loadImage('../images/Restartbutton.png')
	this.h = loadImage('../images/H.png')
	this.r = loadImage('../images/R.png')
	this.m = loadImage('../images/M.png')


    map.preload();
	gun.preload();
	score.preload();
	
	
    
    
    
  }

function draw() {

	if(keyCode === 13){
		site = 1
	}

	if (site === 0){
		image(this.home, 0 , 0 , 1500 ,1300);	
	}

	if(map.life1 === 0){
		site = 2;
		image(this.winPlayer2, 0 , 0 , 1500 ,1300);
		image(this.homeButton, 500 , 1100 , 100 ,100);
		image(this.h, 520 , 1220 , 60 ,45);
		image(this.restartButton, 900 , 1100 , 100 ,100);
		image(this.r, 920 , 1220 , 60 ,45);

		
		if (keyCode === 72){
		
			site = 0
		}
		if (keyCode === 82){
			site = 1
		}


	}

	if(map.life2 === 0){
		site = 2;
		image(this.winPlayer1, 0 , 0 , 1500 ,1300);
		image(this.homeButton, 500 , 1100 , 100 ,100);
		image(this.h, 520 , 1220 , 60 ,45);
		image(this.restartButton, 900 , 1100 , 100 ,100);
		image(this.r, 920 , 1220 , 60 ,45);

		
		if (keyCode === 72){
		
			site = 0
		}
		if (keyCode === 82){
			site = 1
		}

	}

	if (site !== 0 && site !== 2){
  map.draw();
  gun.draw();
  score.draw();
}
  
  
  
  
  
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
}





