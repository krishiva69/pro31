class Umbrella {
constructor(x, y){
var options = {
isStatic: true,
friction: 0.1
}
this.body = Bodies.circle(x, y, 120, options);
this.r = 120;
this.image = loadImage("walking_8.png")
World.add(world, this.body);
}
display(){
var p = this.body.position;
push();
translate(p.x, p.y)
imageMode(CENTER);
image(this.image, 0, 0, this.r*3, this.r*3);
pop();
}
}