class bird {
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,50,50,{restitution:0.5});
        this.height = height;
        this.width = width;
        World.add(world,this.body);
    }

    display(){
      var angle = this.body.angle;
      this.body.position.y = mouseY;
      this.body.position.x = mouseX;
      fill("green");
      angleMode(RADIANS);
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(angle);
      rectMode(CENTER)
      rect(0,0,50,50);
      pop();
    }
}