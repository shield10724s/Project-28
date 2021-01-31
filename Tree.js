class Tree {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.image = loadImage("Images/tree.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
     display(){
            var pos =this.body.position;
            push();
            translate(pos.x,pos.y)
            rectMode(CENTER);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop();
     }
  }