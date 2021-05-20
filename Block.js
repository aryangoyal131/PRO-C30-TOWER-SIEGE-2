class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){

      var pos= this.body.position;
      
      if(this.body.speed < 3){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        this.Visiblity = this.Visiblity - 3;
        tint(255,this.Visiblity);
        pop();

      }
      else{
        World.remove(world, this.body);
      }


    }
}