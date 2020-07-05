var c = document.getElementById("myCanvas");
c.height = window.innerHeight;
c.width = window.innerWidth;
var ctx = c.getContext("2d");

// setInterval(()=>{
ctx.translate(c.width/2, c.height/2);

var ca=Math.floor(c.width*Math.random());
var d=Math.floor(c.height*Math.random());

ctx.beginPath();
ctx.moveTo(ca,d);
ctx.fillStyle="hsl("+360*Math.random()+",100%,50%)";
ctx.strokeStyle="hsl("+360*Math.random()+",100%,50%)";
for(let a = 0; a < 2*Math.PI;a+= 0.0021){
  var r = 350* Math.cos(7 * a);
  var x = r * Math.sin(a);
  var y = r * Math.cos(a);
  ctx.lineWidth=3;
  ctx.lineTo(x,y);
  // ctx.stroke();
  // ctx.fillStyle = "#ff2626"; // Red color
  // ctx.fill(); 
}
ctx.stroke();
ctx.fill();
ctx.closePath()
// },500);


