




const map = new Map ();
const fire = new Fire ();
// const bomb2 = new 








function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

}


function preload(){
    map.preload();
	
	
    
    
    
  }

function draw() {
  map.draw();
  
  
  
  
  
  
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





