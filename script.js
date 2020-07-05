var c = document.getElementById("myCanvas");
c.width=window.innerWidth;
c.height=window.innerHeight;
var ctx = c.getContext("2d");

// ctx.translate(c.width/2, c.height/2);

setInterval(()=>{
  var no=Math.floor(2+16*Math.random());
  var xc=Math.floor(c.width*Math.random() | 0);
  var yd=Math.floor(c.height*Math.random() | 0);
  ctx.beginPath();
  ctx.moveTo(xc, yd);
  ctx.fillStyle="hsl("+360*Math.random()+",100%,50%)";
  ctx.strokeStyle="hsl("+360*Math.random()+",100%,50%)";
  for(let a = 0; a < 2*Math.PI*10;a+= 0.02){
    var r = 300* Math.cos((5/8) * a);
    var x = xc + r * Math.sin(a);
    var y = yd + r * Math.cos(a);
    ctx.lineWidth=1;
    ctx.lineTo(x,y);
  }
  ctx.stroke();
  ctx.fill();
},5000);


