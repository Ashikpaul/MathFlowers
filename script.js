var c = document.getElementById("myCanvas");
c.width=window.innerWidth;
c.height=window.innerHeight;
var ctx = c.getContext("2d");

// ctx.translate(c.width/2, c.height/2);

class Flower{
  constructor(){
    this.xc = c.width * Math.random() | 0;
    this.yd = -c.height * Math.random() | 0;
    this.color = Math.random() * 360 | 0;
    this.border = Math.random() * 360 | 0;
  }
  
  showFlower(){
    ctx.beginPath();
    ctx.moveTo(this.xc, this.yd);
    for(let a = 0; a < 2*Math.PI;a+= 0.02){
      this.r = 30 * Math.cos(4 * a);
      this.x = this.xc + this.r * Math.cos(a);
      this.y = this.yd + this.r * Math.sin(a);
      ctx.lineWidth=1;
      ctx.lineTo(this.x,this.y);
    }
    ctx.fillStyle="hsl("+this.color+",100%,50%)";
    ctx.strokeStyle="hsl("+this.border+",100%,50%)";
    ctx.stroke();
    ctx.fill();
  }
  
  fallFlower(){
    this.yd += 5;
    if ( this.yd > c.height || this.yd < -c.height) {
      this.xc = Math.floor(c.width*Math.random() | 0);
      this.yd = Math.floor(-100 | 0);
    }
  }
  
}

let flowersArr = [];

//create 1500 stars (objects)
for (let i = 0; i < 200; i++) flowersArr.push(new Flower());

function draw() {
  ctx.clearRect(0,0,c.width, c.height);
  for (let s of flowersArr) {
      s.fallFlower();
      s.showFlower();
  }
  requestAnimationFrame(draw);
}

draw();


