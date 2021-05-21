class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.slingimage1=loadImage("./sprites/sling1.png");
        this.slingimage2=loadImage("./sprites/sling2.png");
        this.slingimage3=loadImage("./sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

     image(this.slingimage1,200,20);
     image(this.slingimage2,170,20)


        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(84,39,15);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y-40);
            line(pointA.x-20,pointA.y,pointB.x+20,pointB.y-40);
            image(this.slingimage3,pointA.x-20,pointA.y)
        }
    }
    
}