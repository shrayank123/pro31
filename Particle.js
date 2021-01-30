class Particle{
    constructor(x,y,r){
        var options = {
            restitution: 0.5,
            friction: 0
        }
        this.r=r
        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(random(0, 255), random(0, 155), random(0, 125));
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        colorMode(HSB);
        noStroke();
        translate(pos.x,pos.y);
       
        fill(this.color);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}