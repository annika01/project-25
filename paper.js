class Paper {
    constructor (x,y){
        var options={
            isStatic:false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
        }
this.body= Bodies.circle(x,y, 20, options)
World.add(world, this.body )
 this.image= loadImage("paper.png")

    }

   display(){
var pos= this.body.position
imageMode(CENTER)
  fill ("red")
  image (this.image, pos.x, pos.y, 40,40)
   }
        
    }
