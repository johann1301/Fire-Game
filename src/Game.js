






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
      this.player1 = loadImage('../images/player1.png')
      this.player2 = loadImage('../images/player2.png')
      this.bombImage = loadImage('../images/bomb.png')
      this.bombImage2 = loadImage('../images/bomb.png')
      this.fireR = loadImage('../images/fire-right.png')
      this.fireL = loadImage('../images/fire-left.png')
      this.fireU = loadImage('../images/fire-up.png')
      this.fireD = loadImage('../images/fire-down.png')
      this.fire2R = loadImage('../images/fire-right.png')
      this.fire2L = loadImage('../images/fire-left.png')
      this.fire2U = loadImage('../images/fire-up.png')
      this.fire2D = loadImage('../images/fire-down.png')
      }
   
    constructor(){
      this.width = 100;
      this.height = 100;
      this.image;
      this.player1;
      this.x = 100;
      this.y = 100;
      this.pl2x = 1300;
      this.pl2y = 1100;
      this.bombs = [];
      this.fires = [];
      this.bombx = 100;
      this.bomby = 100;
      this.firex = 2000;
      this.firey = 2000;
      this.bombs2 = [];
      this.fires2 = [];
      this.bomb2x = 100;
      this.bomb2y = 100;
      this.fire2x = 2000;
      this.fire2y = 2000;
      this.collision = false;
      this.life1 = 3;
      this.life2 = 3;
      
    }
    draw (){
        
            clear()

          
            // console.log(this.life1)  
            // console.log(this.life2)

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

      //Bombs 2
 
      this.bombs2.forEach(function(bomb2){
        bomb2.draw()
      
      })

      //Fire
 
      this.fires.forEach(function(fire){
        fire.draw()
      
      })

      //Fire2
 
      this.fires2.forEach(function(fire2){
        fire2.draw()
      
      })

        
          // Player
  
      image(this.player1, this.x, this.y, this.width, this.height)
      image(this.player2, this.pl2x, this.pl2y, this.width, this.height)
       
       
        // Collision

        //Bomb 1 Player 1

      if (this.x === this.firex +100 || this.x === this.firex +200 ){
	     fire.collision1 ()
      }
      if (this.x === this.firex -100 || this.x === this.firex -200  ){
        fire.collision1 ()
       }
       if (this.y === this.firey - 100 || this.y === this.firey -200 ){
        fire.collision1 ()
       }
       if (this.y === this.firey + 100 || this.y === this.firey +200  ){
        fire.collision1 ()
       }

        //Bomb 1 Player 2

       if ( this.pl2x === this.firex +100 || this.pl2x === this.firex +200){
        fire.collision2 ()
       }
       if ( this.pl2x === this.firex -100 || this.pl2x === this.firex -200 ){
         fire.collision2 ()
        }
        if ( this.pl2y === this.firey - 100 || this.pl2y === this.firey -200 ){
         fire.collision2 ()
        }
        if ( this.pl2y === this.firey + 100 || this.pl2y === this.firey +200 ){
         fire.collision2 ()
        }

        //Bomb 2 Player 1

      if (this.x === this.fire2x +100 || this.x === this.fire2x +200 ){
        fire2.collision1 ()
       }
       if (this.x === this.fire2x -100 || this.x === this.fire2x -200  ){
         fire2.collision1 ()
        }
        if (this.y === this.fire2y - 100 || this.y === this.fire2y -200 ){
         fire2.collision1 ()
        }
        if (this.y === this.fire2y + 100 || this.y === this.fire2y +200  ){
         fire2.collision1 ()
        }
 
         //Bomb 2 Player 2
 
        if ( this.pl2x === this.fire2x +100 || this.pl2x === this.fire2x +200){
         fire2.collision2 ()
        }
        if ( this.pl2x === this.fire2x -100 || this.pl2x === this.fire2x -200 ){
          fire2.collision2 ()
         }
         if ( this.pl2y === this.fire2y - 100 || this.pl2y === this.fire2y -200 ){
          fire2.collision2 ()
         }
         if ( this.pl2y === this.fire2y + 100 || this.pl2y === this.fire2y +200 ){
          fire2.collision2 ()
         }
 
    }



    //Player 1
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



       //Player 2
    moveRight2() {
      if (this.pl2x<=1200 && this.pl2y !== 200 && this.pl2y !== 400 && this.pl2y !== 600 && this.pl2y !== 800 && this.pl2y !== 1000){
        this.pl2x += 100
      }
          
      }
      moveLeft2() {
      if (this.pl2x>=200 && this.pl2y !== 200 && this.pl2y !== 400 && this.pl2y !== 600 && this.pl2y !== 800 && this.pl2y !== 1000){
          this.pl2x -= 100
      }
      }
      moveUp2() {
      if (this.pl2y>=200 && this.pl2x !== 200 && this.pl2x !== 400 && this.pl2x !== 600 && this.pl2x !== 800 && this.pl2x !== 1000 && this.pl2x !== 1200){
          this.pl2y -= 100
      }
      }
      moveDown2() {
      if (this.pl2y<=1000 && this.pl2x !== 200 && this.pl2x !== 400 && this.pl2x !== 600 && this.pl2x !== 800 && this.pl2x !== 1000 && this.pl2x !== 1200){
          this.pl2y += 100
      }
      }

      addBomb2(){
        if (this.bombs2.length < 1){
        this.bombs2.push(new Bomb2(this.bombImage2))
        setTimeout(() => {  this.bombs2.shift() }, 2500);
        this.bomb2x = this.pl2x
        this.bomb2y = this.pl2y 
        } 
        
      } 

      explosion2 (){
        if (this.fires2.length < 1){
          setTimeout(() => { this.fires2.push(new Fire2(this.fireD, this.fireL, this.fireR, this.fireU))  }, 1000);
        setTimeout(() => {  this.fires2.shift() }, 2500);
        setTimeout(() => {  this.fire2x = this.bomb2x; }, 1000);
        setTimeout(() => {  this.fire2y = this.bomb2y; }, 1000)
        setTimeout(() => {  this.fire2x = 2000 }, 2500);
        setTimeout(() => {  this.fire2y = 2000 }, 2500);
        
        }

      }
     
      
      
      
}
 
class Bomb {


  draw (){



    image(map.bombImage, map.bombx, map.bomby, 100, 100);
    
    
  }


}


class Bomb2 {


  draw (){



    image(map.bombImage2, map.bomb2x, map.bomb2y, 100, 100);
    
    
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

  collision1 (){

    map.fires.shift();
    // map.bombs.shift();
    map.firex = 2000;
    map.firey = 2000;
    map.life1 -= 1;

  }

  collision2 (){

    map.fires.shift();
    // map.bombs.shift();
    map.firex = 2000;
    map.firey = 2000;
    map.life2 -= 1;

  }


}



class Fire2 {
  

  draw (){

    

    if (map.bomb2x<=1200 && map.bomb2y !== 200 && map.bomb2y !== 400 && map.bomb2y !== 600 && map.bomb2y !== 800 && map.bomb2y !== 1000){
      image(map.fire2R, map.bomb2x + 100, map.bomb2y, 200, 100)
      }
    if (map.bomb2x >=200 && map.bomb2y !== 200 && map.bomb2y !== 400 && map.bomb2y !== 600 && map.bomb2y !== 800 && map.bomb2y !== 1000){
      image(map.fire2L, map.bomb2x -200, map.bomb2y, 200, 100)
    }
    if (map.bomb2y>=200 && map.bomb2x !== 200 && map.bomb2x !== 400 && map.bomb2x !== 600 && map.bomb2x !== 800 && map.bomb2x !== 1000 && map.bomb2x !== 1200){
      image(map.fire2U, map.bomb2x , map.bomb2y -200, 100, 200)
    }
    if (map.bomb2y<=1000 && map.bomb2x !== 200 && map.bomb2x !== 400 && map.bomb2x !== 600 && map.bomb2x !== 800 && map.bomb2x !== 1000 && map.bomb2x !== 1200){
      image(map.fire2D, map.bomb2x , map.bomb2y +100, 100, 200)
    }
  }

  collision1 (){

    map.fires2.shift();
    // map.bombs.shift();
    map.fire2x = 2000;
    map.fire2y = 2000;
    map.life1 -= 1;

  }

  collision2 (){

    map.fires2.shift();
    // map.bombs.shift();
    map.fire2x = 2000;
    map.fire2y = 2000;
    map.life2 -= 1;

  }


}








