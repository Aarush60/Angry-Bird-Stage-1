class Box {  //properties and functions

    constructor(x,y,width,height) {

        var options = {
            'restitution':0.8, //JSON - java script object notation
            'friction':0.3,
            'density':1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push(); //capture the new setting
        translate(pos.x,pos.y);// change the 0 of the axis to the given x and y position.
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect (0,0,this.width,this.height);
        pop(); //revert back to the old setting


        //rotate and translate function changes the entire game space translation.

    }

}






