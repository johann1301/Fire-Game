






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
      this.fireR = loadImage('../images/fire-right.png')
      this.fireL = loadImage('../images/fire-left.png')
      this.fireU = loadImage('../images/fire-up.png')
      this.fireD = loadImage('../images/fire-down.png')
      }
  
    constructor(){
      this.width = 100;
      this.height = 100;
      this.image;
      this.character;
      this.x = 100;
      this.y = 100;
      this.bombs = [];
      this.fires = [];
      this.bombx = 100;
      this.bomby = 100;
      this.firex = 2000;
      this.firey = 2000;
      this.collision = false;
      this.life = 3;
      
    }
    draw (){
        
            clear()

          
            // console.log(this.life)  
            

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

          //Bombs
 
      this.bombs.forEach(function(bomb){
        bomb.draw()
      
      })

      //Fire
 
      this.fires.forEach(function(fire){
        fire.draw()
      
      })

        
          // Player
  
      image(this.character, this.x, this.y, this.width, this.height)
       
       
        // Collision

      if (map.x === map.firex +100 || map.x === map.firex +200 ){
	     fire.collision ()
      }
      if (map.x === map.firex -100 || map.x === map.firex -200 ){
        fire.collision ()
       }
       if (map.y === map.firey - 100 || map.y === map.firey -200 ){
        fire.collision ()
       }
       if (map.y === map.firey + 100 || map.y === map.firey +200 ){
        fire.collision ()
       }

        
       
  
     
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
        if (this.bombs.length < 1){
        this.bombs.push(new Bomb(this.bombImage))
        setTimeout(() => {  this.bombs.shift() }, 2500);
        this.bombx = this.x
        this.bomby = this.y 
        } 
        
      } 

      explosion (){
        if (this.fires.length < 1){
          setTimeout(() => { this.fires.push(new Fire(this.fireD, this.fireL, this.fireR, this.fireU))  }, 1000);
        setTimeout(() => {  this.fires.shift() }, 2500);
        setTimeout(() => {  this.firex = this.bombx; }, 1000);
        setTimeout(() => {  this.firey = this.bomby; }, 1000)
        setTimeout(() => {  this.firex = 2000 }, 2500);
        setTimeout(() => {  this.firey = 2000 }, 2500);
        
        }

      }
     
      
      
      
}
 
class Bomb {


  draw (){



    image(map.bombImage, map.bombx, map.bomby, 100, 100);
    
    
  }


}

class Fire {
  

  draw (){

    

    if (map.bombx<=1200 && map.bomby !== 200 && map.bomby !== 400 && map.bomby !== 600 && map.bomby !== 800 && map.bomby !== 1000){
      image(map.fireR, map.bombx + 100, map.bomby, 200, 100)
      }
    if (map.bombx >=200 && map.bomby !== 200 && map.bomby !== 400 && map.bomby !== 600 && map.bomby !== 800 && map.bomby !== 1000){
      image(map.fireL, map.bombx -200, map.bomby, 200, 100)
    }
    if (map.bomby>=200 && map.bombx !== 200 && map.bombx !== 400 && map.bombx !== 600 && map.bombx !== 800 && map.bombx !== 1000 && map.bombx !== 1200){
      image(map.fireU, map.bombx , map.bomby -200, 100, 200)
    }
    if (map.bomby<=1000 && map.bombx !== 200 && map.bombx !== 400 && map.bombx !== 600 && map.bombx !== 800 && map.bombx !== 1000 && map.bombx !== 1200){
      image(map.fireD, map.bombx , map.bomby +100, 100, 200)
    }
  }

  collision (){

    map.fires.shift();
    // map.bombs.shift();
    map.firex = 2000;
    map.firey = 2000;
    map.life -= 1;

  }


}



