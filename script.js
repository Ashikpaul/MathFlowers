var c = document.getElementById("myCanvas");
c.width=window.innerWidth;
c.height=window.innerHeight;
var ctx = c.getContext("2d");

// ctx.translate(c.width/2, c.height/2);

var xc = 400;
var yd = 400;
setInterval(()=>{
  ctx.clearRect(0,0,c.width, c.height);
  ctx.beginPath();
  ctx.moveTo(xc, yd);
  // var no = Math.floor(2+16*Math.random() | 0);
  // var xc = Math.floor(c.width*Math.random() | 0);
  // var yd = Math.floor(c.height*Math.random() | 0);
  ctx.fillStyle="hsl("+360+",100%,50%)";
  ctx.strokeStyle="hsl("+360+",100%,50%)";
  for(let a = 0; a < 2*Math.PI*10;a+= 0.02){
    var r = 50* Math.cos(7 * a);
    var x = xc + r * Math.cos(a);
    var y = yd + r * Math.sin(a);
    ctx.lineWidth=1;
    ctx.lineTo(x,y);
  }
  ctx.stroke();
  ctx.fill();
  yd += 10;
  if ( yd > c.height || yd < -c.height) {
    // xc = Math.floor(c.width*Math.random() | 0);
    yd = Math.floor(c.height*Math.random() | 0);
  }
},50);


