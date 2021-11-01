


const game = new Game();
const player = new Player ();
const map = new Map ();


// const stones = [];

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
//   for (let i=0; i < 5; i++){
//     stones.push(new Stone (200,200))
    // }
}


function preload(){
    map.preload();
    
    
    
  }

function draw() {
	// for (let i=0; i < 5; i++){
	// 	stones[i].draw() ;
	// 	}
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
}


