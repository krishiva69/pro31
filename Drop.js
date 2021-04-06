class Drop{
  constructor(x,y){
      var options = {
          'restitution' : 0.1,
          'friction' : 0.1,
          
      }
  this.body = Bodies.circle(x, y, 7, options);
  
  this.radius = 7;
  World.add (world,this.body);
  }
  
  display(){
    var p = this.body.position;  
    push();
    noStroke();
//translate(p.x, p.y);
fill("blue");
ellipseMode(RADIUS);
ellipse(p.x, p.y, this.radius, this.radius)
  pop();
  }
updateDrops(){
if(this.body.position.y > height){
Matter.Body.setPosition(this.body, {x:random(0, 1000), y: random(0, 100)})
}
}
}
