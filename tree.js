class Tree{
  constructor(x, y) {
      var options = {
          isStatic: true
        }

        this.x= x;
      this.y= y;
     
      this.bottomBody = Bodies.rectangle(this.x,this.y+200,450,10,options);
      this.leftBody = Bodies.rectangle(0,this.y-300,10,300,options);
      this.rightBody = Bodies.rectangle(this.x+225,this.y-300,10,600,options);
      
      this.image = loadImage("Plucking mangoes/tree.png");
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
    }
    display(){
      var pos = this.bottomBody.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image, 0,-200,280,400);
      pop();
    }
}