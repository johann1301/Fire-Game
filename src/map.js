

// let bombx = 100;
// let bomby = 100;



class Map {


 
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
      this.bombImage = loadImage('../images/bomb.png')
      }
  
    constructor(){
      this.width = 100;
      this.height = 100;
      this.image;
      this.character;
      this.x = 100;
      this.y = 100;
      this.bombs = [];
      
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
       

      //Bombs

      // for (let i=0; i< this.bombs.length; i++){
      //   this.bombs[i]
      // }

    
      this.bombs.forEach(function(bomb){
        bomb.draw()
      })
       
  
     
    }
    moveRight() {
      if (this.x<=1200 && this.y !== 200 && this.y !== 400 && this.y !== 600 && this.y !== 800 && this.y !== 1000){
        this.x += 100
      }
          
      }
      moveLeft() {
      if (this.x>=200 && this.y !== 200 && this.y !== 400 && this.y !== 600 && this.y !== 800 && this.y !== 1000){
          this.x -= 100
      }
      }
      moveUp() {
      if (this.y>=200 && this.x !== 200 && this.x !== 400 && this.x !== 600 && this.x !== 800 && this.x !== 1000 && this.x !== 1200){
          this.y -= 100
      }
      }
      moveDown() {
      if (this.y<=1000 && this.x !== 200 && this.x !== 400 && this.x !== 600 && this.x !== 800 && this.x !== 1000 && this.x !== 1200){
          this.y += 100
      }
      }

      addBomb(){
        if (this.bombs.length <= 1){
        this.bombs.push(new Bomb(this.bombImage))
        setTimeout(() => {  this.bombs.shift() }, 2000);
          
          console.log(this.bombs)
        } 
        
      }
      
      
}
 
class Bomb {
  

  draw (){

   
    image(bombImage, 100 , 100, 100, 100);
  }


}



