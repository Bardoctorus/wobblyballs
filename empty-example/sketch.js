let scaler = 0;
let xv;

let balls = [];
let numBalls = 200

function setup() {
  // put setup code here
  createCanvas(1000,1000);
  for (x = 0; x < numBalls; x++)
  {
    balls[x] = new Ball(random(0,width), random(0,height), random(3,50), random(3,50));
  }

}

function draw() {
  background(0);

  

  scaler = scaler + 0.01

  balls.forEach(element => 
    {
    xv = element.updatePosition(scaler);
    element.showBall(xv);
    })

 

 
}


