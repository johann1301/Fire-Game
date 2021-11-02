




const map = new Map ();








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
		
	}
}



