class Ball 
{
  constructor (xPos,yPos,radius)
  {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;

    this.randomFactor = random(-20,20);
    this.r = random (0,255);
    this.g = random (0,255);
    this.b = random (0,255);
  }

  updatePosition(scaler)
  {
  //    print("updatepos called")
      return map(sin(scaler+this.randomFactor), -1 , 1, this.radius, height-this.radius);
  }


  showBall(yPos)
  {
    fill(this.r,this.g,this.b)
    noStroke()
    ellipse(this.xPos,yPos,this.radius, this.radius);
   // print(yPos)
   this.xPos = this.xPos + random(-4,4)
  }
}