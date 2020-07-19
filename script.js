var c = document.getElementById("myCanvas");
c.width=window.innerWidth;
c.height=window.innerHeight;
var ctx = c.getContext("2d");
var cy =c.height;

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
    ctx.save();
    this.yd += 5;
    ctx.rotate((Math.random()*180|0) * Math.PI / 180);
    if ( this.yd > c.height || this.yd < -c.height) {
      this.xc = Math.floor(c.width*Math.random() | 0);
      this.yd = Math.floor(-50 | 0);
    }
    ctx.restore();
  }
}

let flowersArr = [];
for (let i = 0; i < 200; i++) flowersArr.push(new Flower());

function draw() {
  ctx.clearRect(0,0,c.width, c.height);
  ctx.textAlign = "left";
  ctx.fillStyle = "white";
  ctx.font = "italic normal 13px monospace";
  ctx.fillText("Made with 💖 by Ashik Paul", 0, cy);
  for (let s of flowersArr) {
    s.fallFlower();
    s.showFlower();
  }
  requestAnimationFrame(draw);
}
draw();


