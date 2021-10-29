class Player {

    preload() {
  
      this.image = loadImage('../images/0_Warrior_Walk_000.png')
      }
  
    constructor(){
      this.width = 100;
          this.height = 100;
          this.image;
      this.x = 100;
        this.y = 100;
    }
    draw (){
  
      clear()
  
      image(this.image, this.x, this.y, this.width, this.height)
  
      // image(this.image, 500, 500, 100, 100)
    
  
    }
    moveRight() {
      if (this.x<=1200){
        this.x += 100
      }
          
      }
      moveLeft() {
      if (this.x>=200){
          this.x -= 100
      }
      }
      moveUp() {
      if (this.y>=200){
          this.y -= 100
      }
      }
      moveDown() {
      if (this.y<=1000){
          this.y += 100
      }
      }
    
  }