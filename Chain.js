class Chain {

    constructor(bodyA, bodyB) {

        var options = {

            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:0.2,
            length:100
        }
    
        this.chain= Con.create(options);
    
        World.add (world, this.chain);
    }


    display () {

        var linkA = this.chain.bodyA.position;
        var linkB = this.chain.bodyB.position;

        strokeWeight(7);
        
        line(linkA.x,linkA.y,linkB.x,linkB.y);

    }




}