class Mango{
    constructor(x,y,r){
        var options={
            isStatic : true,
            restitution : 0,
            friction : 1,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this. y,this.r/2 ,options);
        World.add(world, this.body);
    }

    display(){
        var paper_pos = this.body.position;
        push();
        translate(paper_pos.x, paper_pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill('white');
        ellipse(0,0,this.r,this.r);
        pop();
    }
}