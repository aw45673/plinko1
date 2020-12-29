class Plinko {
    constructor(x,y) {

        var options={

            isStatic : true,
            restitution :0.3,
            friction : 0.5,
            density : 1.2

        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world, this.body);
        this.r = 5;
    }
    
    display() {
        var pos = this.body.position;

        ellipseMode(RADIUS)
        fill(255,255,255)
        ellipse(pos.x, pos.y,this.r*2,this.r*2);
        
    }
}