
let stones =[]

class Map {

  setup () {
    for (let i=0; i < 6; i++){
    stones.push(new Stone (200,200))
    }
  }

    preload() {
      this.image9 = loadImage('../images/land_6.png')
      this.image = loadImage('../images/down.png')
      this.image2 = loadImage('../images/top.png')
      this.image3 = loadImage('../images/left.png')
      this.image4 = loadImage('../images/right.png')
      this.image5 = loadImage('../images/left-top-corner – 1.png')
      this.image6 = loadImage('../images/left-down-corner – 1.png')
      this.image7 = loadImage('../images/right-top-corner – 1.png')
      this.image8 = loadImage('../images/right-down-corner – 1.png')
      this.background = loadImage('../images/Background.png')
      this.stone = loadImage('../images/stone.png')
      this.character = loadImage('../images/0_Warrior_Walk_000.png')
      }
  
    constructor(){
      this.width = 100;
      this.height = 100;
      this.image;
      this.character;
      this.x = 100;
        this.y = 100;
     
    }
    draw (){
        
            clear()


        // Border
  
          for (let i=100; i<= 1300; i = i +100){
            image(this.image2, i, 0, this.width, this.height) 
          }
          for (let i=100; i<= 1100; i = i +100){
            image(this.image3, 0, i, this.width, this.height) 
          }
          for (let i=100; i<= 1300; i = i +100){
            image(this.image, i, 1200, this.width, this.height)
          }
          for (let i=100; i<= 1100; i = i +100){
            image(this.image4, 1400 , i, this.width, this.height) 
          }
          
          image(this.image5, 0 , 0, this.width, this.height)
          image(this.image6, 0 , 1200, this.width, this.height)
          image(this.image7, 1400 , 0, this.width, this.height)
          image(this.image8, 1400 , 1200, this.width, this.height)

        //   Background

          image(this.background, 100 , 100, 1300, 1100)

        //   Stones

          for (let i=200; i<= 1300; i = i +200){
            image(this.stone, i, 200, this.width, this.height) 
          }

          for (let i=200; i<= 1300; i = i +200){
            image(this.stone, i, 400, this.width, this.height) 
          }
          for (let i=200; i<= 1300; i = i +200){
            image(this.stone, i, 600, this.width, this.height) 
          }
          for (let i=200; i<= 1300; i = i +200){
            image(this.stone, i, 800, this.width, this.height) 
          }
          for (let i=200; i<= 1300; i = i +200){
            image(this.stone, i, 1000, this.width, this.height) 
          }

          // Player
  
      image(this.character, this.x, this.y, this.width, this.height)

    }
    moveRight() {
      if (this.x<=1200 && this.x !== this.stone){
        this.x += 100
      }
          
      }
      moveLeft() {
      if (this.x>=200 && this.x !== this.stone){
          this.x -= 100
      }
      }
      moveUp() {
      if (this.y>=200 && this.y !== this.stone){
          this.y -= 100
      }
      }
      moveDown() {
      if (this.y<=1000 && this.y !== this.stone){
          this.y += 100
      }
      }
}



// class Stone {
 
  

  
//   preload() {
//     this.stone = loadImage('../images/stone.png')
//   }
//   constructor(){
//     this.width = 100;
//     this.hight = 100;
//     this.stone;
//   }

//   draw () {
//     image(this.stone)
    
//   }


// } console.log (stones)