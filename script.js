var c = document.getElementById("myCanvas");
c.width=window.innerWidth;
c.height=window.innerHeight;
var ctx = c.getContext("2d");

// ctx.translate(c.width/2, c.height/2);

class Flower{
  constructor(){
    this.xc = c.width * Math.random();
    this.yd = c.height * Math.random();
  }
  
  showFlower(){
    ctx.beginPath();
    ctx.moveTo(this.xc, this.yd);
    for(let a = 0; a < 2*Math.PI*10;a+= 0.02){
      this.r = 20 * Math.cos(7 * a);
      this.x = this.xc + this.r * Math.cos(a);
      this.y = this.yd + this.r * Math.sin(a);
      ctx.lineWidth=1;
      ctx.lineTo(this.x,this.y);
    }
    ctx.stroke();
    ctx.fill();
  }
  
  fallFlower(){
    this.yd += 100;
    if ( this.yd > c.height || this.yd < -c.height) {
      this.xc = Math.floor(c.width*Math.random() | 0);
      this.yd = Math.floor(-100 | 0);
    }
  }
  
}






// var xc = 400;
// var yd = 400;
// setInterval(()=>{
//   ctx.clearRect(0,0,c.width, c.height);
//   ctx.beginPath();
//   ctx.moveTo(xc, yd);
//   // var no = Math.floor(2+16*Math.random() | 0);
//   // var xc = Math.floor(c.width*Math.random() | 0);
//   // var yd = Math.floor(c.height*Math.random() | 0);
//   ctx.fillStyle="hsl("+360+",100%,50%)";
//   ctx.strokeStyle="hsl("+360+",100%,50%)";
//   for(let a = 0; a < 2*Math.PI*10;a+= 0.02){
//     var r = 50* Math.cos(7 * a);
//     var x = xc + r * Math.cos(a);
//     var y = yd + r * Math.sin(a);
//     ctx.lineWidth=1;
//     ctx.lineTo(x,y);
//   }
//   ctx.stroke();
//   ctx.fill();
//   yd += 10;
//   if ( yd > c.height || yd < -c.height) {
//     xc = Math.floor(c.width*Math.random() | 0);
//     yd = Math.floor(-100 | 0);
//   }
// },50);

let flowersArr = [];

//create 1500 stars (objects)
for (let i = 0; i < 1500; i++) flowersArr.push(new Flower());

ctx.fillStyle="hsl(360,100%,50%)";
ctx.strokeStyle="hsl(360,100%,50%)";

function draw() {
  ctx.clearRect(0,0,c.width, c.height);
  for (let s of flowersArr) {
    s.fallFlower();
    s.showFlower();
  }
  //infinte call to draw
  setInterval(()=>{
    draw();
  },500);
  // requestAnimationFrame(draw);
}

draw();


